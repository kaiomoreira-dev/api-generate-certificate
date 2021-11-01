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

export const handle:APIGatewayProxyHandler = async (event) => {
    console.log("Função acessada!")

    const { id, name, grade } = JSON.parse(event.body) as ICreateCertificate;

    const response = await document.query({
        TableName: "users_certificates",
        KeyConditionExpression: "id = :id",
        ExpressionAttributeValues: {
            ":id": id
        }
    }).promise();

    const userAlreadyExist = response.Items[0];

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
    
    const medalPath = path.join(process.cwd(), "src", "template", "selo.png");
    const medal = fs.readFileSync(medalPath, "base64");

    const data:ITemplate = {
         id,
         name,
         grade,
         data: dayjs().format("DD/MM/YYYY"),
         medal 
    }

    const content = await compile(data);

    // converter para pdf

    const browser = await chromium.puppeteer.launch({
        headless: true,
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
      });

    const page = await browser.newPage();

    await page.setContent(content);

   const pdf =  await page.pdf({
    format: "a4",
    landscape: true,
    path: process.env.IS_OFFLINE ? "certificate.pdf" : null,
    printBackground: true,
    preferCSSPageSize: true,
});

    await browser.close();
    

    // salvar no s3

    const s3 = new S3();

    await s3.putObject({
        Bucket: "serverlesscertificatepdf",
        Key: `${id}.pdf`,
        ACL: "public-read",
        Body: pdf,
        ContentType: "application/pdf"        
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify({
          message: "Certificate created",
           url:`https://serverlesscertificatepdf.s3.sa-east-1.amazonaws.com/${id}.pdf`
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }
}