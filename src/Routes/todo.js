const todoController = require('../Controllers/todo')

const getAll = async (req, res) => {
  res.send(await todoController.getAll())
}

const getOne = async (req, res) => {
  res.send(await todoController.getOne(req.params.id))
}

const insertOne = async (req, res) => {
  console.log(req.body)
  const result = await todoController.insertOne(req.body)
  res.status(201).send(result)
}

module.exports = { getAll, getOne, insertOne }
