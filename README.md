<h1  align="center">
  ChallengeBr
</h1>
  
## 📍 Index

- [About](#About)

- [Applied technologies](#applied-technologies)

- [How to use](#how-to-use)

<a  id="about"></a>

## 📑 About

Welcome!

This project was developed in JavaScript and has three parts: ¹front-end (web) part, built-in ReactTS & Ant-Design, ²back-end part using NodeJS + Express + Typescript & TypeORM, and ³PostgreSQL database through Docker.

<a  id="applied-technologies"></a>

## 💻 Applied technologies

The project was developed using the following technologies:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactTS](https://www.typescriptlang.org/docs/handbook/react.html)
- [Ant-Design](https://ant.design/)
- [Styled-Components](https://styled-components.com/)

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)

- [Docker/PostgreSQL](https://hub.docker.com/_/postgres)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://hub.docker.com/)

<a  id="how-to-use"></a>

## ⁉ How to use

### **Prerequisites**

- It is necessary to have the **[Node.js](https://nodejs.org/en/)** installed
- It is necessary to have the **[Docker](hhttps://hub.docker.com/)** installed
- It is necessary to have the **[PostgreSQL] instance **[Docker](https://hub.docker.com/_/postgres)\*\* installed.
- It is necessary to have a package manager installed, like **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**
- It is necessary to have the **[React](https://reactjs.org/)** installed in global way.
- It is necessary to have the **[TypeScript](https://www.typescriptlang.org/)** installed in global way.,

---

### **Steps**

1. Cloning the application:

```sh

$ git clone https://github.com/viniciusrma/ChallengeBr

```

2. Running the Application:

The application runs in two parts:

## Server-api

```sh

# Open the terminal in the root directory and type:

$ cd server_api

# Then install the dependences by typing:

$ yarn / or npm install

# If you don't have the docker installed in global way, you will have to do this to have access to the DB.

- https://docs.docker.com/engine/install/ubuntu/ - Here you sill find instructions to install it on your machine.

# Then you have to connect do the DB instance, running the command below:

$ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

# Notice that the database name, the name of the user and the password are all 'postgres'.

# Then you have to start the DB, by running the command below:

$ docker start postgres

# You can also run using docker-compose, there is already a yaml file on the root directory of the server_api, so you can run it with:

$ docker-compose up -d

# But to do that you should first install docker-compose. You can find it here:

https://docs.docker.com/compose/install/

# Then you can run the development environment by typing:

$ yarn dev

```

## Web

```sh

# Open other terminal in the root directory and type:

$ cd web

# Install the dependences by typing:

$ yarn / or npm install

# Then run:

$ yarn start

```

---

<h4  align="center">
Made by <a  href="https://www.linkedin.com/in/viniciusrma/"  target="_blank">Vinícius Morais</a>
</h4>