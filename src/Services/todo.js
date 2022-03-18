const todoRepository = require('../Repositories/todo')

const getAll = async () => {
  return todoRepository.getAll()
}
const getOne = async (id) => {
  const result = await todoRepository.getOne(id)
  if (!result.length) {
    return null
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

const updateOne = async (id, body) => {
  const result = await getOne(id)
  const { name } = body
  if (!result) {
    return { error: 'todo not found' }
  }
  if (!name) {
    return { error: 'missing param' }
  }
  await todoRepository.updateOne(id, name)
  return { message: 'updated' }
}

module.exports = { getAll, getOne, insertOne, updateOne }
