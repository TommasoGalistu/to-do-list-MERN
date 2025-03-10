const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const TIME_TO_REPEAT = process.env.TIME_TO_REPEAT
const EXTRA_SALT = process.env.EXTRA_SALT

const userController = {
    create: async (req, res) =>{
        try{
            const existingUser = await User.findOne({email: req.body.email})

            if(existingUser){
                return res.status(400).json({error: "Email già presente"})
            }

            const passwordBcrypt = await bcrypt.hash(req.body.password + EXTRA_SALT, TIME_TO_REPEAT);
            const user = new User({...req.body, password: passwordBcrypt});
            await user.save();

            res.status(200).json(user);
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }
}

module.exports = userController;