const path = require('path')
const express = require('express')
const http = require('http')
require('dotenv').config()
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)


const port = process.env.PORT 
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


/**
 * socket io connectio 
 */
let count = 0

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    // creating and sending socket event "countUpdated" to client
    socket.emit('countUpdated', count)
    
    // receiving first then sending socket event to client
    socket.on('increment', () => {
        count++
        io.emit('countUpdated', count)
    })
})

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`)
})