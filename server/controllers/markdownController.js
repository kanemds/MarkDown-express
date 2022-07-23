
const homepage = ( req, res) => {
  try {
    const articles = [{
      title: 'Test',
      createdAt: new Date(),
      description: "Test"
    }]
    res.render('index', { articles: articles})
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" })
  }
}


module.exports = {
  homepage
}