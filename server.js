const express = require('express')
require('dotenv').config();
const  methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000


const markdownRouter = require('./server/routes/markdown.js')
const articlesRouter = require('./server/routes/articles.js')





app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use(methodOverride('_method'))

app.use('/markdown', markdownRouter)
app.use('/markdown/articles', articlesRouter)

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`)
})