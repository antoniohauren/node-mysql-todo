const todoRepository = require('../Repositories/todo')

const getAll = async () => {
  return todoRepository.getAll()
}
module.exports = { getAll }
