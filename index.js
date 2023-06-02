import express from 'express';
import dotenv from 'dotenv';

import {dbconnect} from './utils/dbconnect.js';

dotenv.config();

//connecting to db
dbconnect();

const app = express();

//routes
app.get("/test", (req, res) => {
    res.send("REST API server is running");
  });


//server listening
const PORT = process.env.PORT || 5555;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV || "debug"} mode on port ${PORT}`)
);