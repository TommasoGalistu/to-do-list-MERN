const bycrypt = require('bycrypt');
const User = require('../model/userModel');

const userController = {
    create: async (req, res) =>{
        try{
            const existingUser = await User.findOne({email: req.body.email})

            if(existingUser){
                return res.status(400).json({error: "Email già presente"})
            }

            const passwordBcrypt = await bycrypt
            const user = new User(req.body);
            await user.save();
            res.status(200).json(user);
        }catch(error){
            res.status(400).json({error: error.message})
        }
    }
}

module.exports = userController;