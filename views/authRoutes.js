
//configuracion de las rutas en el enrutador para acceder a posterior en el controlador
const router = require('express').Router();
const authController = require('../controllers/authController')

//router.post = acceder mediante una solicitud HTTP POST
//configuracion de las rutas = ruta como primer argumento y funcion del controlador correspondiente despues
router.post('/register', authController.register);
//router.post('/login', authController.login);

//disponibilidad para ser utilizado en otros archivos
module.exports = router;