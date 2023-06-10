const { User } = require('../models')
const bcrypt = require('bcrypt');
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

//realizar el update de los usuarios
userController.updateProfile = async (req, res) => {
    try {
        //si le meto el token erroneo no me a poder actualizar el profile
        const userId = req.userId;
        console.log(userId)
        const user = await User.findByPk(userId);

        if (!user) {
            return res.json(
                {
                    success: true,
                    message: "User doesnt exists"
                }
            );
        };

        const { name, lastName, email, password, dni, phoneNumber, gender, birthdate, specialityId, collegiateNumber } = req.body;

        const updateFields = {};

        if (name) {
            updateFields.name = name;
        }

        if (lastName) {
            updateFields.lastName = lastName;
        }

        if (email) {
            updateFields.email = email;
        }

        if (password) {
            if (password.length < 6) {
                return res.send('Password must be longer than 6 characters');
            }

            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);

            if (!hasUppercase || !hasLowercase || !hasNumber) {
                return res.send('Password must contain at least one uppercase letter, one lowercase letter, and one number');
            }

            const newPassword = bcrypt.hashSync(password, 8);
            updateFields.password = newPassword;
        }

        if (dni) {
            updateFields.dni = dni;
        }

        if (phoneNumber) {
            updateFields.phoneNumber = phoneNumber;
        }

        if (gender) {
            updateFields.gender = gender;
        }

        if (birthdate) {
            updateFields.birthdate = birthdate;
        }

        if (specialityId) {
            updateFields.specialityId = specialityId;
        }

        if (collegiateNumber) {
            updateFields.collegiateNumber = collegiateNumber;
        }

        const userUpdated = await User.update(updateFields, {
            where: {
                id: userId
            }
        });
        console.log(userUpdated)
        return res.json(
            {
                success: true,
                message: "User updated",
                data: userUpdated
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "User cant be updated",
                error: error
            }
        )
    }
}



module.exports = userController;