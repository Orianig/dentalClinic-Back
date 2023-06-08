//importo el user desde models
//sintaxis de desestructuración, permite importar la variable 
const { User } = require('../models');

const authController = {};

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
