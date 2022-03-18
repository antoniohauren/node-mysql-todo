const todoController = require('../Controllers/todo')

const getAll = async (req, res) => {
  return res.send(await todoController.getAll())
}

const getOne = async (req, res) => {
  return res.send(await todoController.getOne(req.params.id))
}

const insertOne = async (req, res) => {
  const result = await todoController.insertOne(req.body)
  return res.status(201).send(result)
}

const updateOne = async (req, res) => {
  const result = await todoController.updateOne(req.params.id, req.body)
  if (result.error) {
    return res.status(400).send(result)
  }
  return res.status(201).send(result)
}

const deleteOne = async (req, res) => {
  const result = await todoController.deleteOne(req.params.id)
  res.send(result)
}

module.exports = { getAll, getOne, insertOne, updateOne, deleteOne }
