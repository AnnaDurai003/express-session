function authenticate(req, res, next) {
    if (!req.session || !req.session.userId) {
        const err = new Error('You  are dont have session id ');
        err.statusCode = 401;
      return  next(err);
    }
    next();
}

module.exports = authenticate;