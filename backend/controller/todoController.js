const Todo = require('../model/toDoModel')

const todoController = {
    create: async (req, res) =>{
        try{
            
            const todo = new Todo({ description: req.body.description })
            todo.save()
            res.status(200).json({message: "Elemento creato con successo"})
        }catch(error){
            res.status(400).json({message: error.message})
        }
    }
}

module.exports = todoController;