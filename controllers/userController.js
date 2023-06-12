const { User } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userController = {}

//registro de un nuevo usuario en el sistema
userController.register = async (req, res) => {
    try {
        const password = req.body.password;
        if (password.length < 6) {
            return res.send('Password must be longer than 6 characters');
        }

        // Verificar si la contraseña contiene al menos una letra mayúscula, una letra minúscula y un número
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);

        if (!hasUppercase || !hasLowercase || !hasNumber) {
            return res.send('Password must contain at least one uppercase letter, one lowercase letter, and one number');
        }
        // se hashea la contraseña recibida en la solicitud
        const newPassword = bcrypt.hashSync(req.body.password, 8);

        const newUser = await User.create(
            {
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                password: newPassword,
                dni: req.body.dni,
                phoneNumber: req.body.phoneNumber,
                gender: req.body.gender,
                birthdate: req.body.birthdate,
                specialityId: req.body.specialityId,
                collegiateNumber: req.body.collegiateNumber,
                roleId: 2
            }
        );

        return res.send(newUser);
    } catch (error) {
        return res.send('Something went wrong creating users ' + error.message)
    }
}

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
                    exclude: ["password", "createdAt","updatedAt", "roleId"]
                },
                include: specialityId,
                include: [
                {
                        attributes: {
                            exclude: ["updatedAt","createdAt"]
                        },
                        model: Speciality

                    }
                ]
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

//obtencion de todos los perfiles de clientes (doctor)
userController.getAllUsersProfile = async (req, res) => {
    try {

        const users = await User.findAll({
            where: {
                roleId: 3
            }
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
        //si le meto el token erroneo no me a poder actualizar el profile
        const userId = req.userId;
        console.log()
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

        console.log(userId);

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