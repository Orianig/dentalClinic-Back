//importo el user desde models
//sintaxis de desestructuración, permite importar la variable 
const { User } = require('../models');
//importa la biblioteca de cifrado para almacenar la contraseña
const bcrypt = require('bcrypt');
//importa la verificacion del token (autenticacion y autorizacion)
const jwt = require('jsonwebtoken');

//se define el controlador de autenticación
const authController = {};

//registro de un nuevo usuario en el sistema
authController.register = async (req, res) => {
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
                roleId: req.body.roleId,
            }
        );

        return res.send(newUser);
    } catch (error) {
        return res.send('Something went wrong creating users ' + error.message)
    }
}

// login de un usuario en el sistema
authController.login = async (req, res) => {
    try {
        //se requiere solo el email y la password
        const { email, password } = req.body;

        const user = await User.findOne(
            {
                //se busca en el sistema por email
                where: {
                    email: email
                }
            }
        );
        //si el correo no existe en la base de datos
        if (!user) {
            return res.json(
                {
                    success: true,
                    message: "Wrong credentials"
                }
            )
        }
        //validacion de la contraseña
        const match = bcrypt.compareSync(password, user.password);
        //si la contraseña no coincide con la guardada
        if (!match) {
            return res.json(
                {
                    success: true,
                    message: "Wrong credentials"
                }

            )
        }
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                roleId: user.roleId
            },

            'myclinic'
        );
        return res.json(
            {
                success: true,
                message: "successfully logged in",
                token: token
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "user cant be logged",
                error: error
            }
        )
    }
}

module.exports = authController