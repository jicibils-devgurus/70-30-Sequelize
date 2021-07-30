# 70-30-Sequelize

```npm i``` To install all dependencies 

```npm run start``` To run the project

```npm run start-dev``` To run the project in dev mode

Server will be listening at http://127.0.0.1:4444

Make sure you can see this message when you start the server to make sure the database is online
`Connection has been established successfully.` 

```npx sequelize-cli db:migrate``` To run pending migrations

```npx sequelize-cli db:migrate:undo```  To undo migrations

```npx sequelize-cli db:seed:all``` To run seeds

```npx sequelize-cli db:seed:undo```  To undo seed

```npx sequelize-cli migration:generate --name user``` to generate migration file

```npx sequelize-cli seed:generate --name user``` to generate seed file