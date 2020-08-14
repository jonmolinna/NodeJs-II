const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config');
const User = require('./app/models/user');

const apiRoutes = require('./api');

// Settings
const port = process.env.PORT || 3000;
mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

// Variable Secreta
app.set('superSecret', config.secret);

// Middleware
app.use(express.urlencoded({extended: false})); // Entiende las peticiones POST, formulario HTML
app.use(express.json()); // Verifica formatos JSON

app.use(morgan('dev')); // Ver las peticiones mediante consola

// Routes
app.get('/', (req, res) => {
    res.send('Hello, The api is at localhost:3000/api');
});

app.get('/setup', (req, res) => {
    const testUser = new User({
        name: 'Eung',
        password: 'password',
        admin: true
    });

    testUser.save((err) => {
        if(err) throw err; // Ver el error por consola y para la aplication
        console.log('User saved succesfully');
        res.json({
            success: true
        })
    })
});

// Api
app.use('/api', apiRoutes);

// Inicializando Express
app.listen(3000, () => {
    console.log('Server on port 3000')
});