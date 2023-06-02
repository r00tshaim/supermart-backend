import express from "express";
import dotenv from "dotenv";

import { dbconnect } from "./utils/dbconnect.js";
import productRoutes from "./routes/v1/productsRoutes.js";
import categoriesRoutes from "./routes/v1/categoriesRoutes.js"

dotenv.config();

//connecting to db
dbconnect();

const app = express();

//routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoriesRoutes);

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
