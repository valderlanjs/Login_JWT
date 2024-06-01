# Documentação do Projeto

## Visão Geral 

Login JWT  é uma aplicação backend desenvolvida com TypeScript e Express.js. A aplicação tem como objetivo fornecer funcionalidades de autenticação e gerenciamento de usuários, utilizando um banco de dados Redis para gerenciamento de sessões e tokens de autenticação.

## Finalidade

A aplicação foi criada para servir como um exemplo de implementação de autenticação e autorização em uma API RESTful, além de demonstrar a integração com um banco de dados Redis para armazenamento de dados de sessão. Ela inclui:

- Autenticação de usuários com tokens JWT.
- Gerenciamento de sessões de usuários.
- Controle de acesso às rotas.
- Estrutura modular para facilitar a manutenção e escalabilidade. 

## Estrutura da Aplicação

A estrutura de pastas do projeto é organizada da seguinte forma:

    Login-JWT/
    ├── .env
    ├── .env.example
    ├── docker-compose.yml
    ├── tsconfig.json
    ├── src/
    │   ├── @types/
    │   │   └── index.d.ts
    │   ├── app/
    │   │   ├── Auth/
    │   │   │   ├── routes.ts
    │   │   │   ├── controllers/
    │   │   │   │   └── AuthController.ts
    │   │   │   ├── middlewares/
    │   │   │   │   └── AuthMiddleware.ts
    │   │   │   ├── exceptions/
    │   │   │   │   └── AuthError.ts
    │   │   │   ├── services/
    │   │   │   │   └── AuthService.ts
    │   │   ├── Users/
    │   │   │   ├── routes.ts
    │   │   │   ├── controllers/
    │   │   │   │   └── UsersController.ts
    │   ├── lib/
    │   │   └── redis.ts
    │   ├── app.ts
    │   ├── config.ts
    │   ├── index.ts
    │   ├── routes.ts


