const todoService = require('../Services/todo')

const getAll = () => {
  return todoService.getAll()
}

const getOne = async (id) => {
  const result = await todoService.getOne(id)
  console.log(result)
  if (!result) {
    return { error: 'todo not found' }
  }
  return result
}

const insertOne = (body) => {
  if (!body) {
    return { error: 'invalid body' }
  }
  return todoService.insertOne(body)
}

const updateOne = (id, body) => {
  if (!body) {
    return { error: 'invalid body' }
  }
  return todoService.updateOne(id, body)
}

module.exports = { getAll, getOne, insertOne, updateOne }
