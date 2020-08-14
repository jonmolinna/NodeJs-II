const express = require('express');
const app = express();

app.use(express.json()); // Convierte Json en formato objeto
app.use(express.urlencoded({extended: false})); // Transforma los datos a objeto, enviados de un formulario

app.use(require('./controllers/authController'));

module.exports = app;