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
        const userId = req.userId;

        const book = await Book.findByPk(bookId);

        if (!book) {
            return res.json(
                {
                    success: true,
                    message: "Book doesnt exists"
                }
            );
        };

        const { date, interventionTypeId, details, dentistId, results } = req.body;

        const bookUpdated = await Book.update(
            {
                title: title,
                description: description
            },
            {
                where: {
                    id: bookId
                }
            }
        )

        return res.json(
            {
                success: true,
                message: "Book updated",
                data: bookUpdated
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Book cant be updated",
                error: error
            }
        )
    }
}


module.exports = appointController;
