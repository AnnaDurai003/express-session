module.exports.login = (req, res, next) => {
  try {
    let userData = { username: 'Durai', password: 'password' }

    const { username, password } = req.body
    if (username != userData.username || password != userData.password) {
      return res
        .status(401)
        .send({ error: true, message: ' username or password is invalid' })
    } else {
      req.session.userInfo = userData.username
      return res.send({ message: 'landing success!!!', data: req.session })
    }
  } catch (error) {
    next(error)
  }
}

module.exports.logout = (req, res, next) => {
  try {
    req.session.destroy((err) => {
      if (!err) {
        res.send('Log Out!')
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports.protected = (req, res, next) => {
  try {
    if (req.session.userInfo) {
     return res.send({
        data: req.session,
        message: `hello ${req.session.userInfo} and your session id is ${req.sessionID}`,
      })
    } else {
     return res.status(401).send(req.session)
    }
  } catch (error) {
    next(error)
  }
}
