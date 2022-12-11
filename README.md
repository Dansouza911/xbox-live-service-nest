# Xbox Live API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center"></p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

# Steam Project Server

Educational project developed in the 4th module of my Web Development course at Blue EdTech. It consists in an API of an environment based in Steam, Xbox Live and Playstation Store.

## Prerequisites

To run this application locally you'll need:

- **Node js** v16.15.0 or superior; (https://nodejs.org/en/download/)
- **NPM** v8.5.5 or superior;
- **Nest js** v8.5.5 or superior; (https://docs.nestjs.com/)
- **PostgresSQL** v8.2.6 or superior. (https://www.postgresql.org/download/)

## Documentation

- [Documentation (production)](https://steam-project-api.onrender.com/api)
- [Documentation (local)](https://localhost:3001/api)

## Cloning

Cloning

```bash
  $ git clone https://github.com/darcanj0/steam-project.git
  $ cd steam-project
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`JWT_SECRET`

## Run Locally

Go to the project directory

```bash
  cd steam-project
```

Install dependencies

```bash
  npm install
```

Seed the Database

```bash
  npm run seed
```

Start the server

```bash
  npm run start:dev
```
