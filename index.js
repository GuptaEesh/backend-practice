import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import subscribersRouter from "./routes/subscribers.js";
dotenv.config();
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to database"));
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/subscribers", subscribersRouter);
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("Successful"))
  .catch((err) => console.log(err));
app.listen(PORT, () => console.log("index started"));
