const express = require('express')
const router = express.Router()
const markdownController = require('../controllers/markdownController')


router.get('/', markdownController.homepage)

module.exports = router