const express = require('express')
const router = express.Router()
const articles = require('../controllers/articlesController.js')



router.get('/', articles.allArticles)
router.get('/new',articles.newPage)
router.post('/', articles.postNewArticle)
router.get('/:slug', articles.articleId)
router.delete('/:id',articles.deleteId)



module.exports = router