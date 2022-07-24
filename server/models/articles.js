const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')


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
  },
  slug: {
    type:String,
    required: true,
    unique: true
  }
})

// before CRUD this will run beforehand
articleSchema.pre('validate', function(next) {
  if ( this.title ) {
    // this strict title is not character or number will auto remove
    this.slug = slugify(this.title, { lower: true, strict: true })
  }
  next()
})

// first argument is the name for this database table
module.exports = mongoose.model('Article', articleSchema)

