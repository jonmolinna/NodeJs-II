const { Router } = require('express')
const router = Router();

//Importando Rutas
const {renderIndex, renderAbout} = require('../controllers/index.controller');

//Creando Rutas
router.get('/', renderIndex);
router.get('/about', renderAbout);

module.exports = router;