const { dbHost, dbUser, dbPass } = require('../Utils/config')
const mysql = require('mysql2')

const conn = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPass
})
conn.connect((err) => {
  if (err) throw err
  conn.query('DROP DATABASE todos', (err) => { if (err) throw err })
  conn.query('CREATE DATABASE todos', (err, result) => {
    if (err) throw err
    console.log('Database Created')
  })
  conn.query('USE todos', (err) => { if (err) throw err })
  conn.query(`CREATE TABLE todos (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  )`, (err) => { if (err) throw err })
  conn.end()
})
