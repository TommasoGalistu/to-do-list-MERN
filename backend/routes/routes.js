const express = require('express')
const userController = require('../controller/userController');
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('Hello Pagina pubblica')
})
router.post('/', userController.create)

module.exports = router; 
