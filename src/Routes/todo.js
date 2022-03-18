const todoController = require('../Controllers/todo')

const getAll = async (req, res) => {
  res.send(await todoController.getAll())
}
module.exports = { getAll }
