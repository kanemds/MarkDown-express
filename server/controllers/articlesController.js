require('../models/database')

const Article = require('../models/articles')

const allArticles = async ( req, res) => {
  try {
    // require Article modle and find() <--find all
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('./articles/articles', { articles: articles})
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" })
  }
}

const newPage = ( req, res) => {
  try {
    res.render('./articles/new', { article: new Article()} )
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" })
  }
}

const articleId = async ( req, res ) => {
  // res.send( req.params.id)  is pure id mpt Obj[id]
  const article = await Article.findOne( {slug: req.params.slug } )
  if ( article == null ) {
    res.redirect('/markdown/articles')
  } else {
  res.render('./articles/show', { article: article })
  }
}

const postNewArticle = async ( req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })
  try {
    article = await article.save()
    res.redirect(`/markdown/articles/${article.slug}`)
  } catch (e) {
    // if it fails the prev will save since input the {article} inside
    // also need to go to the form value:value
    res.render('./articles/new', { article: article })
  }
}

const deleteId = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/markdown/articles')
}

module.exports = {
  allArticles,
  newPage,
  postNewArticle,
  articleId,
  deleteId
}