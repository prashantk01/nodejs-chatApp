// import mongoose from "mongoose"
// import dotenv from "dotenv";
const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config();


const NODE_ENV = process.env.NODE_ENV || "";
const MONGODB_URI =process.env.MONGODB_URI || "";

let db;
const connectDB = function () {
  // DATABASE CONNECTION
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // MONGODB CONNECTION CHECK
  db = mongoose.connection;
  db.on("error", (err) => {
    console.log("database connection error");
  });
  db.once("open", async () => {
    console.log("databse connected");
  });
};

module.exports = connectDB;
