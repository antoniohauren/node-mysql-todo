const express = require('express')
const contentType = require('./Middlewares/content-type')
const cors = require('./Middlewares/cors')
const jsonParser = require('./Middlewares/json-parser')

const server = express()
const routes = require('./Routes')

server.use(cors)
server.use(jsonParser)
server.use(contentType)
server.use(routes)

module.exports = server
