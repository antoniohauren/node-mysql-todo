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

const insertOne = async (body) => {
  const { name } = body
  if (!name) {
    return { error: 'missing param' }
  }
  await todoRepository.insertOne(name)

  return { message: 'inserted' }
}

module.exports = { getAll, getOne, insertOne }
