const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io')
const db=require("./src/config/db.js");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
// var $ = require("jquery")(window);
var $ = require('jquery')

// DOTENV CONFIG CONNECTION
const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;


var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', () =>{
  console.log('a user is connected')
})

// Connecting to DB
if (process.env.NODE_ENV !== "test") {
  db.connectDB();
}

app.use("/", require("./src/routes"));


//Start Server
const server = app.listen(port, () => {
    console.log(`Server Running on ${port}`)
})
