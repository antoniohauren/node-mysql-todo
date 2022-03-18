const { Router } = require('express')
const { helloWorld } = require('./hello-world')
const { getAll, getOne, insertOne, updateOne } = require('./todo')

const routes = new Router()

routes.get('/', helloWorld)
routes.get('/todo/all', getAll)
routes.get('/todo/:id', getOne)
routes.post('/todo', insertOne)
routes.put('/todo/:id', updateOne)

module.exports = routes
