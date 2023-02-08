<h1>API Generate Certificate  </h1>

## Summary

## Description

## Pré-requisitos

## Project structure

### Template

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── generateCertificate.ts
│   │   │   ├── handler.ts      # Create certificate
│   │   │
│   │   ├── verifyCertificate.ts
│   │   │   ├── handler.ts      # Verify certificate
│   │   │
Serverless configuration
│   │   │   ├── mock.json       # `Hello` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts       # `Hello` lambda input event JSON-Schema
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```

## Project Acess

### Open && Run




