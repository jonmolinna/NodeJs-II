// Variable de Entorno
require('dotenv').config();

// Inicializando las Configuraciones
const app = require('./server');

//Inicializando la Base de Datos
require('./database');

app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'))
})

