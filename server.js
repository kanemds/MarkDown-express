const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
const routes = require('./server/routes/markdownRoutes.js')
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`)
})