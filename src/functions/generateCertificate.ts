import { document } from "../util/dynamodbClient";

import path from "path";
import fs from "fs";

import handlebars from "handlebars";
import dayjs from "dayjs";

import chromium from "chrome-aws-lambda";

import { S3 } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";

interface ICreateCertificate{
    id: string;
    name: string;
    grade: string;
}

interface ITemplate {
    id: string;
    name: string;
    grade: string;
    data: string;
    medal: string;
}

// compilar arquivo template
const compile = async (data: ITemplate) => {
    const certificatePath = 
    path.join(process.cwd(), 
    "src", 
    "template", 
    "certificate.hbs");

    const html = fs.readFileSync(certificatePath, "utf8");

    return handlebars.compile(html)(data); 
}

// metodo handle para receber info do body
export const handle:APIGatewayProxyHandler = async (event) => {
    const { id, name, grade } = JSON.parse(event.body) as ICreateCertificate;

    //criar query no dynamodb para encontrar tabela e informação pelo id
    const response = await document.query({
        TableName: "users_certificates",
        KeyConditionExpression: "id = :id",
        ExpressionAttributeValues: {
            ":id": id
        }
    }).promise();

    // criar constante recebendo a a primeira posição do array de Items dentro do response
    const userAlreadyExist = response.Items[0];

    // valida se ja existe um usuário na posição 0 do array de Items dentro do response
    if(!userAlreadyExist) {
        await document.put({
            TableName: "users_certificates",
            Item: {
                id,
                name,
                grade
            }
        }).promise();
    }
    
    // adicionar caminho da imagem da medalha para inserir no pdf
    const medalPath = path.join(process.cwd(), "src", "template", "selo.png");

    //convertendo para formato base64
    const medal = fs.readFileSync(medalPath, "base64");

    // tipando informações
    const data:ITemplate = {
         id,
         name,
         grade,
         data: dayjs().format("DD/MM/YYYY"),
         medal 
    }

    // compilando template com informações do usuário encontrada
    const content = await compile(data);

    // utilizando puppeteer para controloar navegador 
    const browser = await chromium.puppeteer.launch({
        headless: true,
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
      });

    // cria pagina em branco no navegador
    const page = await browser.newPage();

    // aplica dados com o template do certificado
    await page.setContent(content);

    //pea a pagina com as informações passada e criar o pdf
   const pdf = await page.pdf({
    format: "a4",
    landscape: true,
    path: process.env.IS_OFFLINE ? "certificate.pdf" : null,
    printBackground: true,
    preferCSSPageSize: true,
});
    // encerra o navegador que criou o pdf
    await browser.close();
    

    //cria instancia do s3
    const s3 = new S3();

    //salva pdf objeto dentro do s3
    await s3.putObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${id}.pdf`,
        ACL: "public-read",
        Body: pdf,
        ContentType: "application/pdf"        
    }).promise();

    // retorna mensagem de status até objeto com infos
    return {
        statusCode: 201,
        body: JSON.stringify({
          message: "Certificate created",

           //Cria pdf e retornar url dentro da AWS para baixar o pdf gerado
           //url:`https://serverlesscertificatepdf.s3.sa-east-1.amazonaws.com/${id}.pdf`
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }
}