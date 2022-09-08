const path = require('path')
const express = require('express')
require('dotenv').config()
const app = express()

const port = process.env.PORT 
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`)
})