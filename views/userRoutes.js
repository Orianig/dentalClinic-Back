const router = require('express').Router();
const userController = require('../controllers/userController');
//const isSuperAdmin = require('../middlewares/isSuperAdmin');
const isAdmin = require('../middlewares/isAdmin');
const isStaff = require('../middlewares/isStaff');
const auth = require('../middlewares/verifyToken');

// router.get('/', auth, isSuperAdmin, userController.getAllUsers)
//registro de doctores
//obtencion de los perfiles
router.get('/profile', auth, userController.getUserProfile);
router.get('/allProfiles', auth, userController.getAllUsersProfile);
// update de los perfiles de usuario
router.put('/updateProfile', auth, userController.updateProfile);
router.put('/:id',auth, isAdmin, userController.updateProfileByAdmin);
//eliminar user
router.delete('/:id',auth, isAdmin, userController.deleteUser);

module.exports = router;

