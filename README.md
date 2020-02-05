# express-sequelize-mysql

## Build Setup

```bash
# clone the project

git clone https://github.com/LouisKoXiang/express-sequelize-mysql.git

# enter the project directory

cd express-sequelize-mysql

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
  node_modules/.bin/sequelize model:generate --name User --attributes name:string,age:integer,gender:string
```

## Step3 部署到你的資料庫

```bash
  node_modules/.bin/sequelize db:migrate
```

## 新增DB欄位

```bash
  node_modules/.bin/sequelize migration:create --name add-column-Users
```

## 刪除DB欄位

#
Copyright (c) 2020-present Louis Ko
