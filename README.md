
# LMS App

  

This project is a Nodejs application.

  

## Prerequisites

  

Before running the project, make sure you have the following software installed on your machine:

  

- Node.js v18: You can use NVM (Node Version Manager) to install Node.js v18.

- Postgres: Make sure you have installed postgres

  
  

## Installation

  

### Installing Node.js v18 using NVM

  

1. Install NVM (Node Version Manager) by following the instructions at [NVM repository](https://github.com/nvm-sh/nvm#installation). Choose the installation method that is suitable for your operating system.

  

2. Once NVM is installed, open a new terminal window or restart your terminal.

  

3. Install Node.js v18 by running the following command:

  

```bash

nvm install 18

```

  

4. Verify that Node.js v18 is installed by running the following command:

  

```bash

node --version

```

  

You should see the version number of Node.js v18.

  

### Starting the Application

  

1. Install project dependencies by navigating to the project directory in your terminal and running the following command:

  

```bash

npm install

```

  

2. Update the environemt and default.json as per needs. Ensure database credentials are correct.

  

3. Run migrations using following command

```bash

npm run migrate:latest

```

  

4. Once the installation is complete, you can start the application by running the following command:

  

```bash

npm run start

```

  

This command will start the development server and provide you with a local URL where you can access the application in your browser.

  

5. For dev:

  

```bash

npm run dev

```

  

This command will start the development server and provide you with a local URL where you can access the application in your browser.

  

## Running Tests

  

To run tests for the project, use the following command:

  

```bash

npm  run  test

```

  

This command will execute the tests and display the test results in the terminal.

  
  

## Migrations

To add migrations you to follow these manual steps. Ensure you have database created first.
1. Install sequelize-cli by running following command
```
npm i -g sequelize-cli
```
2. Ensure `migrations-path` in *.sequelizerc* is set to `src/migrations`.
3. Now run the following command to generate migrations
```
sequelize migration:create <file-name>
``` 
4. Once you have done the changes in the file. Run the command 
```
yarn build
```
5. Change the migration path in .sequelizerc file 
```
"migrations-path":  resolve("build/migrations"),
``` 
6. Run the following command. It will generate your migration
```
sequelize db:migrate
```
7. If you're having troubles while running migrations you can follow this video
```
https://www.loom.com/share/4e824e0de1474567ad990fa2edd27784
```