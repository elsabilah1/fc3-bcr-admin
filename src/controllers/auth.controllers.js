const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.getLogin = (req, res) => {
  const { token } = req.cookies

  if (token) {
    return res.redirect('/dashboard')
  }

  res.render('pages/login', { title: 'Login', statusCode: res.statusCode })
}

exports.postLogin = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).render('pages/login', {
      title: 'Login',
      statusCode: res.statusCode,
      message: 'Masukkan email dan password pada input kolom yang tersedia.',
    })
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

  if (!email.match(emailPattern) || !password.match(passPattern)) {
    return res.status(401).render('pages/login', {
      title: 'Login',
      statusCode: res.statusCode,
      message:
        'Masukkan email dan password yang benar. Perhatikan penggunaan huruf kapital.',
    })
  }

  const passwordHash = bcrypt.hashSync(password, 10)

  const token = jwt.sign(
    { email, passwordHash },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '1d',
    }
  )

  res.cookie('token', token)

  res.redirect('/dashboard')
}

exports.logout = (req, res) => {
  res.clearCookie('token')

  res.redirect('/')
}
