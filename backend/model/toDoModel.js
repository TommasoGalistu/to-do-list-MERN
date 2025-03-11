const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('TodoElement', toDoSchema)