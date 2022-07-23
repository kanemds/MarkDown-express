const express = require('express')
const router = express.Router()
const markdown = require('../controllers/markdownController.js')


router.get('/', markdown.homepage)

module.exports = router