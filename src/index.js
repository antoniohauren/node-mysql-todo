const app = require('./app')
const { port } = require('./Utils/config')

app.listen(port, () => console.log(`running on port ${port}`))
