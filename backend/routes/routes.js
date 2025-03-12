const express = require('express')
const userController = require('../controller/userController');

const publicRouter = express.Router()
const privateRouter = express.Router()

const authMiddleware = require('../middleware/authMiddleware')

// private router
privateRouter.use(authMiddleware)

privateRouter.get('/utente-autenticato', (req,res) =>{
    res.status(200).json({message: "sei autorizzato"});
})
privateRouter.get('/logout', userController.logout)



// public router
publicRouter.post('/register', userController.create)
publicRouter.post('/login', userController.login)

module.exports = {publicRouter, privateRouter}; 
