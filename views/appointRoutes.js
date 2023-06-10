const router = require('express').Router();
const appointController = require('../controllers/appointController')
// const isStaff = require('../middlewares/isStaff');
const auth = require('../middlewares/verifyToken');

//citas para usuarios en general
router.post('/newAppointment', auth, appointController.createAppointment);
router.put('/:id', auth, appointController.updateAppointment);
// router.delete('/deletAppointment',auth, appointController.deleteAppointment);

// //citas para el paciente
// //obtencion de todas sus citas
// router.get('/patientAppointments',auth, appointController.getUserAppointments);
// //obtencion de una cita en detalle
// router.get('/appointmentDetail', auth, appointController.getAppointmentDetails);

// //citas para el doctor
// //obtencion de todas las citas existentes
// router.get('/allAppointments',auth, isStaff, appointController.getAllAppointments);
// //obtencion de las citas que solo corresponden al doctor
// router.get('/dentistAppointments',auth, isStaff, appointController.getAllUserAppointments);

module.exports = router;