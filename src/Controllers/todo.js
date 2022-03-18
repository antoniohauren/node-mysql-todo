const todoService = require('../Services/todo')

const getAll = async () => {
  return todoService.getAll()
}

module.exports = { getAll }
