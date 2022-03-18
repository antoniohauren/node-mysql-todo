module.exports = {
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST || 'db',
  dbUser: process.env.DB_USER || 'root',
  dbPass: process.env.DB_PASS || 'root'
}
