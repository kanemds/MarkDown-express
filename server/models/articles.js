const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  description: {
    type:String,
    required: true
  },
  markdown: {
    type:String,
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
})

// first argument is the name for this database table
module.exports = mongoose.model('Article', articleSchema)

