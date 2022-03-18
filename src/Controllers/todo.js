const todoService = require('../Services/todo')

const getAll = () => {
  return todoService.getAll()
}

const getOne = (id) => {
  return todoService.getOne(id)
}

module.exports = { getAll, getOne }
