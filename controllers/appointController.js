const { Appointment } = require("../models");
// const { QueryTypes } = require('sequelize');
const appointController = {};

appointController.createAppointment = async (req, res) => {
    try {
        const { date, interventionTypeId, details, patientId, dentistId, results } = req.body;

        //validaciones

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
module.exports = appointController;
