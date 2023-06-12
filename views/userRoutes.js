const router = require('express').Router();
const userController = require('../controllers/userController');
// const isSuperAdmin = require('../middlewares/isSuperAdmin');
const isAdmin = require('../middlewares/isAdmin');
const isStaff = require('../middlewares/isStaff');
const auth = require('../middlewares/verifyToken');

// router.get('/', auth, isSuperAdmin, userController.getAllUsers)
//registro de doctores
router.post('/register', isAdmin, userController.register);
//obtencion de los perfiles
router.get('/profile', auth, userController.getUserProfile)
router.get('/allProfiles', isStaff, isAdmin, userController.getAllUsersProfile)
// update de los perfiles de usuario
router.put('/updateProfile', auth, userController.updateProfile)

module.exports = router;

