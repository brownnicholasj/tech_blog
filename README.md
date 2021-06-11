# Tech Blog

![License: ISC](https://img.shields.io/badge/License-ISC-blue)

## Description

- The backend setup for this e-commerce site will allow the site owner to
  utilize communication technologies and allows them to compete in the internet
  marketplace.
- The technology used for this application are: node, javascript, mysql2 (npm),
  express (npm), dotenv (npm), sequelize (npm), and nodemon (npm - dev only)
- The biggest challenge was working through sequelize and getting familiar with
  the documentation and how the relationships/associations work from table to
  table.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Demo](#demo)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

The following dependencies will be installed:

- mysql2
- express
- dotenv
- sequelize
- nodemon

## Usage

The user will start their server via express and allow the server to start
listening for incoming communication ![usage001](./assets/images/usage001.jpg)

The server will then monitor for incoming messages and be listening on routes of
.../api/categories, .../api/products, .../api/tags
![usage002](./assets/images/usage002.jpg)

The server will be listening for GET requests on the main routes utilizing
sequelize 'FindAll' and will SELECT all records and associated models
![usage003](./assets/images/usage003.jpg)

The server will be listening for GET requests with an extended request (/:id)
utilizing sequelize 'FindByPk' and will SELECT the specific record and
associated models columns ![usage004](./assets/images/usage004.jpg)

The server will be listening for PUT requests with an extended request (/:id)
utilizing sequelize 'FindByPk' and will UPDATE the record
![usage005](./assets/images/usage005.jpg)

The server will be listening for DELETE requests with an extended request (/:id)
utilizing sequelize 'FindByPk' and will DELETE the record and CASCADE DELETES
where setup within the model associations
![usage006](./assets/images/usage006.jpg)

The server will be listening for POST requests on the main routes utilizing
sequelize 'create' and will INSERT the record with all given attributes
![usage007](./assets/images/usage007.jpg)

## License

This project is licensed under the ISC license.

## Contributing

A thanks to the following contributors to this project:

- 2021 Trilogy Education Services, LLC
- Nicholas Brown (brownnicholasj.dev@gmail.com)

## Demo

Click the following link to watch video demo of the application (2min55sec
runtime)<br> https://youtu.be/qjhncF658j0

### Demo Script

- 00:00 - create database through schema and CLI
- 00:11 - seed database through CLI
- 00:22 - start server to begin listening
- 00:30 - Insomnia call - Wrong Route (testing invalid path)
- 00:34 - Insomnia call - Categories/GetAll
- 00:39 - Insomnia call - Categories/GetById
- 00:45 - Insomnia call - Categories/Post
- 00:49 - Insomnia call - Categories/Put
- 00:55 - MySQL table check to verify update
- 01:13 - Insomnia call - Categories/Delete
- 01:18 - MySQL table check to verify delete
- 01:22 - Insomnia call - Products/GetAll
- 01:28 - Insomnia call - Products/GetById
- 01:32 - Insomnia call - Products/Post
- 01:36 - MySQL table check to verify post
- 01:47 - Insomnia call - Products/Put
- 01:55 - MySQL table check to verify update
- 02:01 - Insomnia call - Products/Delete
- 02:06 - MySQL table check to verify delete
- 02:12 - Insomnia call - Tags/GetAll
- 02:19 - Insomnia call - Tags/GetById
- 02:23 - Insomnia call - Tags/Post
- 02:25 - MySQL table check to verify post
- 02:35 - Insomnia call - Tags/Put
- 02:40 - MySQL table check to verify update
- 02:44 - Insomnia call - Tags/Delete
- 02:48 - MySQL table check to verify delete

### Behind the Code

- The database schema is stored and can be used to create the database with the
  MySQL shell commands <br> ![btc001](./assets/images/btc001.jpg)

- The Database Models are defined within the models folder for Category,
  Product, Tag, and ProductTag: <br>
  ![btc002_1](./assets/images/btc002_1.jpg)<br>
  ![btc002_2](./assets/images/btc002_2.jpg)<br>
  ![btc002_3](./assets/images/btc002_3.jpg)<br>
  ![btc002_4](./assets/images/btc002_4.jpg)

- Associations are configured in the models folder within the index.js<br>
  ![btc003](./assets/images/btc003.jpg)

- Routes are defined within the routes/api folder to perform the CRUD actions
  for each api ![btc004](./assets/images/btc004.jpg)

- Seed file provided can be ran to populate the database <br>
  ![btc005](./assets/images/btc005.jpg)

- Database access is done through variable file utilizing dotenv <br>
  ![btc006](./assets/images/btc006.jpg)

- Express is used to listen for api's and Sequelize is utilized to access and
  perform functions within the database <br>
  ![btc007](./assets/images/btc007.jpg)

## Questions

If you have any questions about the repo, open an issue or contact me directly
at brownnicholasj.dev@gmail.com.You can find more of my work on my GitHub:
[brownnicholasj](https://github.com/brownnicholasj/).
