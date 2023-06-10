
//importo el modulo router de express para utilizarlo en la creacion de un enrutador
const router = require('express').Router();

//importacion del modulo desde el directorio views y se asigna a una variable para su posterior llamada
const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const appointRoutes = require('./views/appointRoutes')


//accesibilidad a la ruta
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/appointments', appointRoutes);

module.exports = router;