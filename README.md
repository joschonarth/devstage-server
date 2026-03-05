<div align="center">

<img alt="devstage" src="https://github.com/joschonarth/devstage-web/blob/master/src/assets/logo.svg" />

# devstage API

*Indique, convide e suba no ranking.*

<img src="https://img.shields.io/github/last-commit/joschonarth/devstage-server?style=default&logo=git&logoColor=white&color=6F9DE2&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/devstage-server?style=default&color=6F9DE2&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/devstage-server?style=default&color=6F9DE2&labelColor=27272a" alt="repo-language-count">

---

📃 [Sobre](#-sobre)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tecnologias](#️-tecnologias)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Funcionalidades](#-funcionalidades)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Como rodar](#-como-rodar)&nbsp;&nbsp;•&nbsp;&nbsp;
📖 [Documentação](#-documentação-da-api)

</div>

---

## 📃 Sobre

O **devstage** é uma aplicação web de sistema de indicações e convites para eventos, e este repositório contém a **API REST** que a alimenta. Por meio dela é possível cadastrar participantes em eventos, gerar links únicos de convite, registrar acessos e inscrições originadas por cada link e calcular o ranking global de indicações em tempo real. Além disso, a API conta com um **agente de inteligência artificial** capaz de consultar métricas do evento diretamente no **PostgreSQL** e **Redis** e gerar respostas inteligentes sobre desempenho, acessos e conversões de convites. O backend é construído com **Node.js**, **Fastify** e **Drizzle ORM**.

---

## 🛠️ Tecnologias

- 🟩 **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript server-side.
- ⚡ **[Fastify](https://fastify.dev/)** — Framework web focado em performance e baixo overhead.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança em tempo de desenvolvimento.
- 🗃️ **[Drizzle ORM](https://orm.drizzle.team/)** — ORM moderno e type-safe para TypeScript.
- 🐘 **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional para persistência dos dados.
- 🔴 **[Redis](https://redis.io/)** — Armazenamento em memória para ranking e contagem de acessos em tempo real.
- 🐳 **[Docker](https://www.docker.com/)** — Containerização do banco de dados para ambiente reproduzível.
- 📖 **[Swagger](https://swagger.io/)** — Documentação interativa da API via `@fastify/swagger`.
- 🛡️ **[Zod](https://zod.dev/)** — Validação e parsing de schemas com inferência de tipos.
- 🔍 **[Biome](https://biomejs.dev/)** — Linting e formatação de código de alta performance.
- 🤖 **[Vercel AI SDK](https://ai-sdk.dev/)** — Criação de agente de IA com tool calling para consulta de métricas do evento.

---

## ✨ Funcionalidades

- [x] 📝 Inscrição de participantes em eventos
- [x] 🔗 Geração de link único de convite por participante
- [x] 👥 Registro de inscrições originadas por links de convite
- [x] 📊 Contagem de acessos ao link de convite
- [x] 🎯 Contagem de inscrições geradas pelo link
- [x] 🏆 Posição do participante no ranking de indicações
- [x] 🌍 Ranking global de indicações em tempo real
- [x] 🤖 Agente de IA para consulta de métricas do evento
- [x] 🧠 Geração de respostas inteligentes com base em dados do PostgreSQL e Redis
- [x] 🛡️ Validação de dados com Zod
- [x] 📖 Documentação interativa da API com Swagger

---

## 🚀 Como rodar

### 📋 Pré-requisitos

- 🟩 [Node.js 18+](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/)
- 🐳 [Docker](https://www.docker.com/)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/devstage-server.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd devstage-server
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente copiando o arquivo de exemplo:

    ```bash
    cp .env.example .env
    ```

### 🐳 Banco de dados

Suba os containers do PostgreSQL e do Redis com Docker:

```bash
docker compose up -d
```

Execute as migrations para criar as tabelas:

```bash
npx drizzle-kit migrate
```

### ▶️ Execução

Inicia o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em **[http://localhost:3333](http://localhost:3333)**.

---

## 🤖 IA & Analytics

O projeto conta com um **agente de inteligência artificial** desenvolvido com o **Vercel AI SDK**, utilizando **tool calling** para acessar dados do sistema.

Esse agente é capaz de:

- Consultar métricas de convites no PostgreSQL
- Obter contagem de acessos armazenada no Redis
- Gerar respostas inteligentes sobre o desempenho de eventos e participantes

---

## 📖 Documentação da API

Com o servidor rodando, acesse a documentação interativa gerada pelo Swagger:

**[http://localhost:3333/docs](http://localhost:3333/docs)**

---

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub — isso ajuda muito!

---

<div align="center">

Feito com ♥ por **[João Otávio Schonarth](https://github.com/joschonarth)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>
