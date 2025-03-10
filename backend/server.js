import router from './routes/routes';

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000;

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/todolist-mern')
    .then(() => console.log('Connected to MongoDb'))
    .catch(err => console.error('MongoDB connection error:' err))

app.get('/', router)

app.listen(PORT, () =>{
    console.log(`Sei online alla porta ${PORT}`)
})