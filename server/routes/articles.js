const express = require('express')
const router = express.Router()
const articles = require('../controllers/articlesController.js')



router.get('/', articles.allArticles)
router.get('/new',articles.newPage)
router.post('/', articles.postNewArticle)
router.get('/:id', articles.articleId)



module.exports = router