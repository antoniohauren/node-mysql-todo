const { Router } = require('express')
const { helloWorld } = require('./hello-world')

const routes = new Router()

routes.get('/', helloWorld)

module.exports = routes
