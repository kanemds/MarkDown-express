const express = require('express')
const router = express.Router()
const articles = require('../controllers/articlesController.js')

router.delete('/:id',articles.deleteId)

router.get('/new',articles.newPage)
router.get('/:slug', articles.articleId)
router.get('/', articles.allArticles)

router.post('/', articles.postNewArticle)

module.exports = router