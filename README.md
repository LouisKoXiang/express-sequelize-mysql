# express-sequelize-mysql

## Build Setup

```bash
# clone the project

git clone https://github.com/LouisKoXiang/Sequelize-express-mysql.git

# enter the project directory

cd Sequelize-express-mysql

# Set config/config with mysql
{
  "username": "",
  "password": "",
  "database": "",
  "host": "",
  "operatorsAliases": false,
  "dialect": "mysql",
  "pool": {
    "max": 1,
    "min": 0,
    "idle": 1000
}

# install dependency
  npm install
  npm install sequelize sequelize-cli

# develop
npm run start
```

This will automatically open http://localhost:3000

# DB

## Step1 sequelize 環境前置
`````````````
  add migrations file (mkdir)
  add models file (mkdir)
`````````````

## Step2 建立 User datatable

```bash
  node_modules/.bin/sequelize model:generate --name user --attributes name:string,age:integer,gender:string
```

## Step3 部署到你的資料庫

```bash
  node_modules/.bin/sequelize db:migrate
```
#
Copyright (c) 2020-present Louis Ko
