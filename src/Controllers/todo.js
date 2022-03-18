const todoService = require('../Services/todo')

const getAll = () => {
  return todoService.getAll()
}

const getOne = async (id) => {
  const result = await todoService.getOne(id)
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

const deleteOne = async (id) => {
  return todoService.deleteOne(id)
}

module.exports = { getAll, getOne, insertOne, updateOne, deleteOne }
