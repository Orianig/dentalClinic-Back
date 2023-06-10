const { User } = require('../models')
const userController = {}

//Obtencion del perfil de cada usuario
userController.getUserProfile = async (req, res) => {
    try {
        //constante que contiene el requerimiento
        const userId = req.userId
        console.log(userId)

        //conseguir uno segun su clave primaria
        const userProfile = await User.findByPk(
            userId,

            {
                attributes: {
                    exclude: ["password"]
                },
                // include: appointments,
                // include: [
                //     {
                //         attributes: {
                //             exclude: ["updatedAt"]
                //         },
                //         model: Book,

                //     }
                //]
            }
        )

        return res.json({
            success: true,
            message: "User profile retrieved",
            data: userProfile
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "User profile cant be retrieved",
                error: error
            }
        )
    }
}

//obtencion de todos los perfiles de usuario
userController.getAllUsersProfile = async (req, res) => {
    try {

        const users = await User.findAll();

        return res.json({
            success: true,
            message: "users retrieved",
            data: users
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Users cant be retrieved",
                error: error
            }
        )
    }
}

module.exports = userController;