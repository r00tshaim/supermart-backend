import express from "express";
import dotenv from "dotenv";
import path from "path";

import initSocket from './socket/socket.js';

import cors from "cors";

import { dbconnect } from "./utils/dbconnect.js";
import productRoutes from "./routes/v1/productsRoutes.js";
import categoriesRoutes from "./routes/v1/categoriesRoutes.js"
import userRoutes from "./routes/v1/userRoutes.js";
import ordersRoutes from "./routes/v1/ordersRoutes.js"
import authRoutes from "./routes/v1/authRoutes.js"

import ErrorHandlerMiddleware from "./middlewares/errorMiddleware.js";

//TODO: need to move initTwilio as utils function
import { initTwilio } from "./controllers/v1/authController.js";

import morganMiddleware from "./middlewares/morgan.middleware.js";
// The morgan middleware does not need this.
// This is for a manual log
import logger from "./logger/logger.js";

dotenv.config();

//connecting to db
dbconnect();

//intilaizing twilio client
initTwilio();

const app = express();

// Initialize Socket.IO and get server and io objects
const { server, io } = initSocket(app);

// Broadcast the current server time as global message, every 1s
 setInterval(() => {
   io.sockets.emit('message-for-client', { time: new Date().toISOString() });
 }, 1000);


// Add the morgan middleware
app.use(morganMiddleware);

app.use(cors())

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(express.json());

//routes
app.use("/api/v1/user" , userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/orders" , ordersRoutes);
app.use("/api/v1/auth", authRoutes);


app.get("/test", (req, res) => {
  logger.info("Checking the API status: Everything is OK")
  res.status(200).send({
    status: "UP",
    message: "The API is up and running!"
  });
});

app.use(ErrorHandlerMiddleware);

//server listening
const PORT = process.env.PORT || 5555;

process.on('exit', code => {
  // Only synchronous calls
  logger.error(`Process exited with code: ${code}`)
  console.log(`Process exited with code: ${code}`)
})

server.listen(
  PORT,
  '0.0.0.0',
  logger.info(`Server running in ${process.env.NODE_ENV || "production" } mode on port ${PORT}`),
  console.log(
    `Server running in ${process.env.NODE_ENV || "production" } mode on port ${PORT}`
  )
);
