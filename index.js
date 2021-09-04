const express = require('express')
const messageRoutes = require('./routes/messageRoutes')
require('dotenv').config()
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())
app.use(bodyParser.json({type: 'application/json'}))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use("/api", messageRoutes)