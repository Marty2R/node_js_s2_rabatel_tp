import "dotenv/config";
import mongoose from "mongoose";
import express, { response } from "express";
import stockRoute from "./routes/stock.js";
import authRoutes from "./routes/auth.js";

const app = express();

const PORT = process.env.PORT || 3001;

console.log("env : ", process.env.MONGO_STRING);
const MONGO_STRING = process.env.MONGO_STRING;

mongoose.connect(MONGO_STRING).then(() => {
  console.log("Connected to the database !");

  // On lance le serveur :
  app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
  });
});

app.use(express.json());

// Routes
app.get("/", (request, response) => {
  response.json({ message: "Hello Word !" });
});

// Middelwares
app.use("/stock", stockRoute);
app.use("/auth", authRoutes);
