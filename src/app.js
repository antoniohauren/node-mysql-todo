const express = require('express')

const server = express()
const routes = require('./Routes')

server.use(routes)

module.exports = server
