const { Appointment, User, Intervention } = require("../models");
// const { QueryTypes } = require('sequelize');
const appointController = {};

//crear nueva cita
appointController.createAppointment = async (req, res) => {
    try {
        const { date, interventionTypeId, details, patientId, dentistId, results } = req.body;
        //tomo el role y user id para su validacion
        const { roleId, userId } = req;

        if (roleId === 3 && patientId !== userId) {
            // Solo los usuarios con roleId igual a 3 pueden crear citas con su propio userId
            return res.json({
                success: false,
                message: "You can only create appointments for yourself",
            });
        }
        if (roleId === 2 && !patientId) {
            // Los usuarios con roleId igual a 2 deben proporcionar un patientId válido
            return res.json({
                success: false,
                message: "Patient ID is required for dentists",
            });
        }

        const newAppointment = await Appointment.create(
            {
                date,//'2023-06-07T14:30:00'
                interventionTypeId,
                details,
                patientId,
                dentistId,
                results
            }
        );

        return res.json({
            success: true,
            message: "Appointment created",
            data: newAppointment
        });
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Appointment cant be created",
                error: error
            }
        )
    }
}

//actualizar una cita
appointController.updateAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await Appointment.findByPk(appointmentId);

        if (!appointment) {
            return res.json(
                {
                    success: true,
                    message: "AppointmentId doesnt exists"
                }
            );
        };

        const { date, interventionTypeId, details, dentistId, results } = req.body;
        // Verificar el rol del usuario que realiza la solicitud

        const appointmentUpdate = await Appointment.update(
            {
                date,//'2023-06-07T14:30:00'
                interventionTypeId,
                details,
                dentistId,
                results
            },
            {
                where: {
                    id: appointmentId
                }
            }
        )

        return res.json(
            {
                success: true,
                message: "Appointment updated",
                data: appointmentUpdate
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Appointment cant be updated",
                error: error
            }
        )
    }
}

// eliminar una cita
appointController.deleteAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const deleteAppointment = await Appointment.destroy({
            where: {
                id: appointmentId
            }
        });

        return res.json(
            {
                success: true,
                message: "Appointment deleted",
                data: deleteAppointment
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Appointment cant be deleted",
                error: error
            }
        )
    }
}

//obtener citas propias
appointController.getUserAppointments = async (req, res) => {
    try {
        const { userId } = req;

        const getUserAppointments = await Appointment.findAll({
            where: {
                patientId: userId
            }
        });

        return res.json({
            success: true,
            message: "appointments retrieved",
            data: getUserAppointments
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appointments cant be retrieved",
            error: error.message
        });
    }
};

//obtener todas las citas(doctor)
appointController.getAllAppointments = async (req, res) => {
    try {

        const getAllAppointments = await Appointment.findAll();

        return res.json({
            success: true,
            message: "appointments retrieved",
            data: getAllAppointments
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appointments cant be retrieved",
            error: error.message
        });
    }
};

//obtener todas las citas(doctor)
appointController.getAllUserAppointments = async (req, res) => {
    try {

        const userId = req.userId;

        const dentistAppointments = await Appointment.findAll({
            where: {
                dentistId: userId
            }
        });

        return res.json({
            success: true,
            message: "appointments retrieved",
            data: dentistAppointments
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appointments cant be retrieved",
            error: error.message
        });
    }
};

// cita en detalle
appointController.getAppointmentDetails = async (req, res) => {
    try {
        const userId = req.userId;
        console.log(userId)
        const appointmentId = req.params.id;
        console.log(appointmentId)
        
        const appointment = await Appointment.findByPk(appointmentId, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [
                {
                    model: Intervention,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                },
                {
                    model: User,
                    attributes: {
                        exclude: ["email", "password", "dni", "phoneNumber", "gender", "birthdate", "collegiateNumber", "roleId", "createdAt", "updatedAt"]
                    }
                }
            ],
            where: {
                id: appointmentId
            }
        });

        if (!appointment || appointment.UserId !== userId) {
            return res.json({
                success: false,
                message: "Appointment not found or does not belong to the authenticated user"
            });
        }

        return res.json({
            success: true,
            message: "Appointment details",
            data: appointment
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appointment details could not be retrieved",
            error: error
        });
    }
};

module.exports = appointController;
