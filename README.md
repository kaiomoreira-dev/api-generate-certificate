<h1 align="center"> API Generate Certificate </h1>

<p align="center">
  <img width="200" height="200" src="./API%20Generate%20Certificate.png">
</p>

## Summary
- [Summary](#summary)
- [Intro](#intro)
- [Description](#description)
- [Pré-requisitos](#pré-requisitos)
- [Structure](#structure)
  - [Template](#template)
- [Project Acess](#project-acess)
  - [Open \&\& Run](#open--run)
- [Status](#status)
- [Techniques \&\& Technologies](#techniques--technologies)
- [Owner](#owner)
  
## Intro
* Generate Certificate é uma API Serverless desenvolvida para gerar certificados de
conclusões. Desenvolvido como projeto acadêmico junto a Rockeseat dentro do programa
Ignite.
  
## Description
* Diante da API Generate Certificate foram desenvolvidas atividades como, criar uma
aplicação Serverles modelo FaaS, utilizar banco de dados DynamoDB, configurar o servidor
de forma escalável, criar PDF utilizando a lib puppeeter, configurar deploys utilizando AWS,
configurar S3, configurações dentro do Webpack e criar funções. No decorrer do
desenvolvimento e desafios resolvidos fui capaz de criar experiência de como desenvolver
uma aplicação Serverless e fazer deploys na AWS.

## Pré-requisitos
* Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como 
[VSCode](https://code.visualstudio.com/).

## Structure

### Template
A estrutura do projeto está sendo criada com base no template `aws-nodejs-typescript`
[Serverless framework](https://www.serverless.com/).

- `functions` - contém o código das funções lambda
- `libs` - contém os código compartilhado entre api e o lambda

```
.
├── src
│   ├── functions               # Configuração Lambda e pasta de codigo
│   │   ├── generateCertificate.ts
│   │   │   ├── handler.ts      # Create certificate
│   │   │
│   │   ├── verifyCertificate.ts
│   │   │   ├── handler.ts      # Verify certificate
│   │   │
Serverless configuration
│   │   │   ├── mock.json       # Entrada de parâmetro se nenhum evento for encontrado
│   │   │   └── schema.ts       # Entrada de esquema de evento
│   │   │
│   │   └── index.ts            # Import/export as configurações lambda
│   │
│   └── libs                    # Código lambda compartilhado
│       └── apiGateway.ts       # API Gateway ajuda específico
│       └── handlerResolver.ts  # Biblioteca de retorno funções handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless serviço de arquivo
├── tsconfig.json               # Typescript configuração de compilador
├── tsconfig.paths.json         # Typescript caminhos
└── webpack.config.js           # Webpack configuração
```
## Project Acess

### Open && Run

```bash
# Clone este repositório
$ git clone <https://github.com/kaiomoreira-dev/api-generate-certificate.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd api-generate-certificate

# Instale as dependências
$ yarn ou npm install

# Atualizar lib puppeteer
$ yarn puppeeter:update

# Iniciar o banco de dados DynamoDB
$ yarn dynamo:start

## Iniciar aplicação

// desenvolvimento
$ yarn dev ou npm run dev

// produção
$ yarn deploy ou npm run deploy

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

# O banco de dados do postgres fica no docker na porta <http://localhost:8000> mas nao contém inferface para visualizar dados.
```
## Status
*  Aplicação finalizada devido ao término das atividades acadêmicas. Tendo como objetivo concretizar ensinamentos e o denvolvimento profissional.

## Techniques && Technologies
* ![Typescript](https://img.shields.io/badge/-Typescript-%234F4F4F)
* ![Node.js](https://img.shields.io/badge/-Node.js-%234F4F4F)
* ![Git](https://img.shields.io/badge/-Git-%234F4F4F)
* ![Github](https://img.shields.io/badge/-Github-%234F4F4F)
* ![AWS](https://img.shields.io/badge/-AWS-%234F4F4F)
* ![DynamoDB](https://img.shields.io/badge/-DynamoDB-grey)
* ![FaaS](https://img.shields.io/badge/-FaaS-grey)
  
## Owner
[<img src="https://avatars.githubusercontent.com/u/56137536?s=400&u=a74073f1d0f605815a4f343436c791ab7b7dc184&v=4" width=115><br><sub>Kaio Moreira</sub>](https://github.com/kaiomoreira-dev)

[<img src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width=115><br><sub>Rocketseat</sub>](https://github.com/rocketseat-education)

