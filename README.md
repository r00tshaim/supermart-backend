# supermart-backend
This repo is REST API server for supermart-app

## Setup .env file
`NODE_ENV` - specifiy `debug` or `production` env

`MONGO_URI` - mongodb url

`MONGO_DBNAME` - mongodb name

`MONGO_AUTHDB` - authdb name

`SERVER_IP` - specify server IP for server listening

`PORT` - specify port for server listening

`JWT_SECRET` - Sign with your JWT Secret

`JWT_EXPIRE` - JWT Token expire time 

## Project setup
running seeder script to dump dummy data to mongodb `node seeder.js`
to destroy all data from mongodb `node seeder.js -d`

