require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const subscribersRouter = require("./routes/subscribers");

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
