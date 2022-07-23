const express = require('express')
const router = express.Router()
const articles = require('../controllers/articlesController.js')


router.get('/', articles.articles)


module.exports = router