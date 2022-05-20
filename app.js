import express from "express"
import bodyParser from "body-parser";
import connectDB from "./src/config/dbc.js"
import seedDB from "./src/config/seed.js"
import jsdom from "jsdom";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
// var $ = require("jquery")(window);
import $ from "jquery";

// DOTENV CONFIG CONNECTION
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;


// // var http = require('http').Server(app);
// import http from "http";
// http.Server(app);
// import * as io from 'socket.io-client';
// // var io = require('socket.io')(http);
// // import io from "socket.io";
// io.http;
// io.on('connection', () =>{
//   console.log('a user is connected')
// })

// Connecting to DB
if (process.env.NODE_ENV !== "test") {
  connectDB();
  seedDB();
}


app.use("/", require("./src/routes/index"));


//Start Server
const server = app.listen(port, () => {
    console.log(`Server Running on ${port}`)
})
