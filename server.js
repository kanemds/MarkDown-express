const express = require('express')
const app = express()
const PORT = 3000
const markdown = require('./server/routes/markdown.js')
const articles = require('./server/routes/articles.js')

app.set('view engine', 'ejs')


app.use('/markdown', markdown)

app.use('/markdown/articles', articles)

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`)
})