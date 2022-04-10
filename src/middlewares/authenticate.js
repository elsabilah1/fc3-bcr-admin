module.exports = (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    return res.redirect('/login')
  }

  next()
}
