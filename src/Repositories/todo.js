const connect = require('../Database/db')

const getAll = async () => {
  const conn = await connect()
  const [rows] = await conn.query(`
    SELECT * FROM todos;
  `)
  return rows
}

const getOne = async (id) => {
  const conn = await connect()
  const [rows] = await conn.query(`
    SELECT * FROM todos WHERE id=${id};
  `)
  return rows
}

const insertOne = async (name) => {
  const conn = await connect()
  const [rows] = await conn.query(`
    INSERT INTO todos (name) VALUES (?)
  `, [name])
  return rows
}

const updateOne = async (id, name) => {
  const conn = await connect()
  const [rows] = await conn.query(`
    UPDATE todos SET name = "${name}" WHERE id = ${id}
  `)
  return rows
}

module.exports = { getAll, getOne, insertOne, updateOne }
