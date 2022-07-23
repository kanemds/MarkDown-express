

const homepage = ( req, res) => {
  try {
    res.render('index')
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" })
  }
}


module.exports = {
  homepage
}