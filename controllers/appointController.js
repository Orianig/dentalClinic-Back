const { Appointments } = require("../models");
const { QueryTypes } = require('sequelize');
const appointController = {};

appointController.newAppointment = async(req, res) => {
    try {
        const { date, interventionTypeId, details, patientId, dentistId, results  } = req.body;

        //validaciones

        const newBook = await Book.create(
            {
                title: title,
                description
            }
        );
        
        return res.json({
            success: true,
            message: "Book created",
            data: newBook
        });       
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Book cant be created",
                error: error
            }
        )
    }
}
