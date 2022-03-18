const { Router } = require('express')
const { helloWorld } = require('./hello-world')
const { getAll } = require('./todo')

const routes = new Router()

routes.get('/', helloWorld)
routes.get('/todo/all', getAll)

module.exports = routes
