const todoService = require('../Services/todo')

const getAll = () => {
  return todoService.getAll()
}

const getOne = (id) => {
  return todoService.getOne(id)
}

const insertOne = (body) => {
  if (!body) {
    return { error: 'invalid body' }
  }
  return todoService.insertOne(body)
}

module.exports = { getAll, getOne, insertOne }
