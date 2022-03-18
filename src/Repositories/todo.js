const connect = require('../Database/db')

const getAll = async () => {
  const conn = await connect()
  const [rows] = await conn.query(`
    select * from todos;
  `)
  return rows
}
module.exports = { getAll }
