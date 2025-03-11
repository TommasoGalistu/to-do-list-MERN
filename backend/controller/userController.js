require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken')

const TIME_TO_REPEAT = 15

const userController = {
    create: async (req, res) =>{
        try{
            const existingUser = await User.findOne({email: req.body.email})

            if(existingUser){
                return res.status(400).json({error: "Email già presente"})
            }

            const passwordBcrypt = await bcrypt.hash(req.body.password, TIME_TO_REPEAT);
            const user = new User({...req.body, password: passwordBcrypt});
            await user.save();

            res.status(200).json(user);
        }catch(error){
            res.status(400).json({error: error.message})
        }
    },
    login: async (req, res) =>{
        try{
            const {email, password} = req.body
            const user = await User.findOne({email: email})

            if(!user){
                res.status(400).json({error: "Emeail o password errata"})
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                res.status(400).json({error: "Emeail o password errata"})
            }


            const token = jwt.sign(
                {id: user._id, email: user.email, ip: req.ip},
                process.env.JWT_SECRET,
                {
                    expiresIn: '1h'
                }
            )

            res.status(200).json({message: "Login riuscito!!", token, email})
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }
}

module.exports = userController;