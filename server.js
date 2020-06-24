const express = require('express')

const server = express()
const cars = require('./cars/carRouter')

server.use(express.json())
server.use('/cars', cars)

server.get('/', (req, res) => {
  res.send('<h2>listening on port 5007</h2>')
})

module.exports = server
