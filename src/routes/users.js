var express = require('express');
var router = express.Router();
const usersController = require('../controller/usersController')


//list users
// router.get('/')

//login
router.get('/loggin', usersController.loggin)
// router.post('/loggin')

//register
router.get('/register', usersController.register)
// router.post('/registerUser')

//profile
// router.get('/profile/:id')

//loggOut
// router.post('/loggOut')

//edit user
// router.get('/editUser/:id')
// router.put('/userUpdate/:id')

// delete user
// router.get('/deleteConfirm/:id')
// router.delete('/distroy/:id')

module.exports = router;
