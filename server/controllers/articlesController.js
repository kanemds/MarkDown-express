

const articles = ( req, res) => {
  try {
    res.render('articles', { title: "articles"})
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" })
  }
}


module.exports = {
  articles
}