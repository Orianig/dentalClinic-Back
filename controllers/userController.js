const { User, Speciality } = require('../models')
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");
// const jwt = require('jsonwebtoken');
const userController = {}

//Obtencion del perfil de cada usuario
userController.getUserProfile = async (req, res) => {
    try {
        //constante que contiene el requerimiento
        const userId = req.userId
        console.log(userId)

        //conseguir uno segun su clave primaria
        const userProfile = await User.findByPk(userId, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [
                {
                    model: Speciality,
                    as: 'speciality',
                    attributes: {
                        exclude: ["updatedAt", "createdAt"]
                    }
                }
            ]
        });
        console.log(userProfile)
        return res.json({
            success: true,
            message: "User profile retrieved",
            data: userProfile
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                success: false,
                message: "User profile cant be retrieved",
                error: error
            }
        )
    }
}

//obtencion de todos los perfiles de clientes (doctor)
userController.getAllUsersProfile = async (req, res) => {
    try {

        const users = await User.findAll({
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                include: [
                    {
                        model: Speciality,
                        as: 'speciality',
                        attributes: {
                            exclude: ["updatedAt", "createdAt"]
                        }
                    }],
        });

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
        //si le meto el token erroneo no me va a poder actualizar el profile
        const userId = req.userId;
        const userExist = await User.findByPk(userId);

        if (!userExist) {
            return res.json(
                {
                    success: true,
                    message: "User doesnt exists"
                }
            );
        };

        const { name, lastName, email, password, dni, phoneNumber, gender, birthdate, specialityId, collegiateNumber } = req.body;

            const updates = {};
            //permite actualizar los datos que se solicitan 
            if (name) updates.name = name;
            if (lastName) updates.lastName = lastName;
            if (email) updates.email = email;
            if (dni) updates.dni = dni;
            if (phoneNumber) updates.phoneNumber = phoneNumber;
            if (gender) updates.gender = gender;
            if (birthdate) updates.birthdate = birthdate;
            if (specialityId) updates.specialityId = specialityId;
            if (collegiateNumber) updates.collegiateNumber = collegiateNumber;
            // condicion para mantener el encriptado de la contraseña si se desea actualizar
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
                updates.password = newPassword;
            }

            const userUpdated = await User.update(updates, {
                where: {
                    id: userId
                }
            });

            console.log("userUpdated:", userUpdated);

            return res.json({
                success: true,
                message: "User updated"
            });

        } catch (error) {
            console.log("Error:", error);
            return res.status(500).json({
                success: false,
                message: "User cannot be updated",
                error: error
            });
        }
    };

    //realizar el update de los usuarios admin
    userController.updateProfileByAdmin = async (req, res) => {
        try {

            const userId = req.params.id;
            console.log(userId);
            //corrobora que el usuario exista
            const user = await User.findByPk(userId);

            if (!user) {
                return res.json(
                    {
                        success: true,
                        message: "User doesnt exists"
                    }
                );
            };

            const { name, lastName, email, dni, phoneNumber, gender, birthdate, specialityId, collegiateNumber, roleId } = req.body;

            const updates = {};
            //permite actualizar los datos que se solicitan 
            if (name) updates.name = name;
            if (lastName) updates.lastName = lastName;
            if (email) updates.email = email;
            if (dni) updates.dni = dni;
            if (phoneNumber) updates.phoneNumber = phoneNumber;
            if (gender) updates.gender = gender;
            if (birthdate) updates.birthdate = birthdate;
            if (specialityId) updates.specialityId = specialityId;
            if (collegiateNumber) updates.collegiateNumber = collegiateNumber;
            if (roleId) updates.roleId = roleId;

            // Validar que roleId solo pueda ser 2 o 3
            if (roleId && roleId !== 2 && roleId !== 3) {
                return res.json({
                    success: false,
                    message: "Invalid roleId. Only values 2 and 3 are allowed."
                });
            }

            const userUpdated = await User.update(updates, {
                where: {
                    id: userId
                }
            });

            console.log("userUpdated:", userUpdated);

            return res.json({
                success: true,
                message: "User updated"
            });

        } catch (error) {
            console.log("Error:", error);
            return res.status(500).json({
                success: false,
                message: "User cannot be updated",
                error: error
            });
        }
    };




    //delete user
    userController.deleteUser = async (req, res) => {
        try {
            const userId = req.params.id;

            const deleteUser = await User.destroy({
                where: {
                    id: userId
                }
            });

            return res.json(
                {
                    success: true,
                    message: "User deleted",
                    data: deleteUser
                }
            );
        } catch (error) {
            return res.status(500).json(
                {
                    success: false,
                    message: "User cant be deleted",
                    error: error
                }
            )
        }

    }

    module.exports = userController;