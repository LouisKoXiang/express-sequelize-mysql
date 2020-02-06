# express-sequelize-mysql

## Build Setup

```bash
# clone the project

git clone https://github.com/LouisKoXiang/express-sequelize-mysql.git

# enter the project directory

cd express-sequelize-mysql

# Set config/config database (mysql or sqlite or pgsql ...)
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
## 可直接跳到 Step3

## Step1 sequelize 環境前置
`````````````
  add migrations file (mkdir)
  add models file (mkdir)
`````````````

## Step2 建立 User datatable

```bash 
  # Liunx
  node_modules/.bin/sequelize model:generate --name User --attributes name:string,age:integer,gender:string

  # windows
  "node_modules/.bin/sequelize" model:generate --name User --attributes name:string,age:integer,gender:string
```

## Step3 部署到你的資料庫

```bash
  # Liunx
  node_modules/.bin/sequelize db:migrate
  # windows
  "node_modules/.bin/sequelize" db:migrate
```

## 新增DB欄位

```bash
  # Liunx
  node_modules/.bin/sequelize migration:create --name add-column-Users
  # windows
  "node_modules/.bin/sequelize" migration:create --name add-column-Users
```

## 回復上一動

```bash
  # Liunx
  node_modules/.bin/sequelize db:migrate:undo
  # windows
  "node_modules/.bin/sequelize" db:migrate:undo
```

## 回復指定遷移
```bash
  # Liunx
  node_modules/.bin/sequelize db:migrate:undo:all --to 20200205093308-create-user.js
  # windows
  "node_modules/.bin/sequelize" db:migrate:undo:all --to 20200205093308-create-user.js
```

# Demo Api

````bash
  # Create User {{POST}} Body -> name,age,gender
  http://localhost:3000/api/user

  # Select {{GET}}
  http://localhost:3000/api/user

  # Select by Id {{Get}}
  http://localhost:3000/api/user/:{{id}}

  # updated by id {{Put}}
  http://localhost:3000/api/user/:{{id}}
````

#
Copyright (c) 2020-present Louis Ko
