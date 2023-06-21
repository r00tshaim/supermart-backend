# supermart-backend
This repo is REST API server for supermart-app

## Setup .env file

SERVER 

`NODE_ENV` - specifiy `debug` or `production` env

`SERVER_IP` - specify server IP for server listening

`PORT` - specify port for server listening


DATABASE

`MONGO_URI` - mongodb url

`MONGO_DBNAME` - mongodb name

`MONGO_AUTHDB` - authdb name


AUTH

`JWT_SECRET` - Sign with your JWT Secret

`JWT_EXPIRE` - JWT Token expite time 


OTP

`TWILIO_ACC_SID`

`TWILIO_AUTH_TOKEN`

`TWILIO_VERIFY_SID`


## Project setup
running seeder script to dump dummy data to mongodb `node seeder.js`
to destroy all data from mongodb `node seeder.js -d`

