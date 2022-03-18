const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send({ ok: true })
})

app.listen(3000, () => console.log("running on port 3000"))
