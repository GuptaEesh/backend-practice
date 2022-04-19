require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const subscribersRouter = require("./routes/subscribers");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/subscribers", subscribersRouter);
app.listen(PORT, () => console.log("Server started"));
