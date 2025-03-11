const express = require('express');
const router = require('./routes/routes');
const mongoose = require('mongoose');
const corsMiddleware = require('./middleware/cors');
const cookieParser = require("cookie-parser");

const app = express();

const PORT = 3000;

app.use(express.json())
app.use(corsMiddleware);
app.use(cookieParser())

mongoose.connect('mongodb://localhost:27017/todolist-mern')
    .then(() => console.log('Connected to MongoDb'))
    .catch(err => console.error('MongoDB connection error:', err))



app.use('/user', router)

app.listen(PORT, () =>{
    console.log(`Sei online alla porta ${PORT}`)
})