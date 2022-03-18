const todoController = require('../Controllers/todo')

const getAll = async (req, res) => {
  res.send(await todoController.getAll())
}

const getOne = async (req, res) => {
  res.send(await todoController.getOne(req.params.id))
}
module.exports = { getAll, getOne }
