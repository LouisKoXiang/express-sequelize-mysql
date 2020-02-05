var express = require('express')
var router = express.Router()

const userController = require('../controllers').user

/* home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* User Api */
router.get('/api/user', userController.list) // Select
router.get('/api/user/:id', userController.getById) // Select By Id
router.post('/api/user', userController.add) // created
router.put('/api/user/:id', userController.updateUser) //  Updated

module.exports = router
