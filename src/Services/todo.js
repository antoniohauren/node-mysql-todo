const todoRepository = require('../Repositories/todo')

const getAll = async () => {
  return todoRepository.getAll()
}
const getOne = async (id) => {
  const result = await todoRepository.getOne(id)
  if (!result.length) {
    return { error: 'todo not found' }
  }
  return result.pop()
}
module.exports = { getAll, getOne }
