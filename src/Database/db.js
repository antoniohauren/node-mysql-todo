const mysql = require('mysql2/promise')

class DbConnection {
  constructor () {
    this.connect = this.connect.bind(this)
  }

  async connect () {
    if (this.connection && this.connection.state !== 'disconected') return this.connection
    this.connection = mysql.createConnection('mysql://root:root@db/todos')
    return this.connection
  }
}
module.exports = new DbConnection().connect
