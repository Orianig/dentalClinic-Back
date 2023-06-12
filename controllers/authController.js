//importo el user desde models
//sintaxis de desestructuración, permite importar la variable 
const { User } = require('../models');
//importa la biblioteca de cifrado para almacenar la contraseña
const bcrypt = require('bcrypt');
//importa la verificacion del token (autenticacion y autorizacion)
const jwt = require('jsonwebtoken');
// const secretKey = process.env.SECRET_KEY;

//se define el controlador de autenticación
const authController = {};

//registro de un nuevo usuario en el sistema
authController.register = async (req, res) => {
    try {
        const { name, lastName, email, dni, phoneNumber, gender, birthdate } = req.body;
        const password = req.body.password;
        if (password.length < 6) {
            return res.send('Password must be longer than 6 characters');
        }
console.log(password)
        // Verificar si la contraseña contiene al menos una letra mayúscula, una letra minúscula y un número
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);

        if (!hasUppercase || !hasLowercase || !hasNumber) {
            return res.send('Password must contain at least one uppercase letter, one lowercase letter, and one number');
        }
         // Verificar el formato del correo electrónico utilizando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.send('Invalid email format');
    }
        // se hashea la contraseña recibida en la solicitud
        const newPassword = bcrypt.hashSync(req.body.password, 8);
        // console.log(newPassword)

        const newUser = await User.create(
            {
                name,
                lastName,
                email,
                password: newPassword,
                dni,
                phoneNumber,
                gender,
                birthdate,
                specialityId: null,
                collegiateNumber: null,
                roleId: 3
            }
        );
        console.log(newUser)
        return res.send(newUser);
    } catch (error) {
        return res.send('Something has gone wrong with your credentials, check if they are correct: ' + error.message)
    }
}

// login de un usuario en el sistema
authController.login = async (req, res) => {
    try {
        //se requiere solo el email y la password
        const { email, password } = req.body;
        console.log(email)
        console.log(password)
        const user = await User.findOne(
            {
                //se busca en el sistema por email
                where: {
                    email: email
                }
            }
        );
        console.log(user)
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
        console.log(match)
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
            // process.env.SECRET_KEY
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