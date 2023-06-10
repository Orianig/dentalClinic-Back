const { Appointment } = require("../models");
// const { QueryTypes } = require('sequelize');
const appointController = {};

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


module.exports = appointController;
