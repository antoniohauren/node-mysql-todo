# node-mysql-todo
This is a repository that uses mysql with mysql and express to create a simple todo list

# how to run?

## run with docker
```
docker-compose up
```

## run natively

## install dependencies
```
npm install
```
or
```
yarn
```

## if necessary configure your mysql connection
### edit src/Utils/config.js
```js
module.exports = {
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST || 'db',
  dbUser: process.env.DB_USER || 'root',
  dbPass: process.env.DB_PASS || 'root'
}
```
### or simple add the env vars on your shell
```bash
export PORT=3000
export DB_HOST=localhost
export DB_USER=root
export DB_PASS=root
```
