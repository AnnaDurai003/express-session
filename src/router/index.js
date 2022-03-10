const router = require('express').Router();
const {login, logout, protected } = require('../controller/loginController');

router.post('/login',login);
router.get('/logout',logout);
router.get('/protected',protected)
   
module.exports = router;  