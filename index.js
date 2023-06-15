import express from "express";
import dotenv from "dotenv";
import path from "path";

import { dbconnect } from "./utils/dbconnect.js";
import productRoutes from "./routes/v1/productsRoutes.js";
import categoriesRoutes from "./routes/v1/categoriesRoutes.js"
import userRoutes from "./routes/v1/userRoutes.js";
import ordersRoutes from "./routes/v1/ordersRoutes.js"

dotenv.config();

//connecting to db
dbconnect();

const app = express();

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(express.json());

//routes
app.use("/api/v1/auth" , userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/orders" , ordersRoutes);

app.get("/test", (req, res) => {
  res.send("REST API server is running");
});


//server listening
const PORT = process.env.PORT || 5555;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV || "production" } mode on port ${PORT}`
  )
);
