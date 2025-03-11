const express = require('express')
const userController = require('../controller/userController');
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('Hello Pagina pubblica')
})
router.post('/register', userController.create)
router.post('/login', userController.login)

module.exports = router; 
