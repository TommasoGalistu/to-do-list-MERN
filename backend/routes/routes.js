const express = require('express')
const userController = require('../controller/userController');
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')

router.get('/utente-autenticato', authMiddleware , (req,res) =>{
    res.status(200).json({message: "sei autorizzato"});
})
router.get('/logout', userController.logout)
router.post('/register', userController.create)
router.post('/login', userController.login)

module.exports = router; 
