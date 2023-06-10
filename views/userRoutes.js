const router = require('express').Router();
const userController = require('../controllers/userController');
const isStaff = require('../middlewares/isStaff');
const auth = require('../middlewares/verifyToken');

// router.get('/', auth, isSuperAdmin, userController.getAllUsers)
router.get('/profile', auth, userController.getUserProfile)
router.get('/allProfiles', auth, isStaff, userController.getAllUsersProfile)
// update de los perfiles de usuario
router.put('/updateProfile', auth, userController.updateProfile)

module.exports = router;

