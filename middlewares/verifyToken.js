//importa el modulo
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

//función de middleware (autenticación y la autorización); toma la solicitud, respuesta y siguiente
const auth = (req, res, next) => {
    try {
        //Se extrae el token de autorización del encabezado de la solicitud 
        const bearerToken = req.headers.authorization;

        //si el token de autorizacion no se encuentra
        if (!bearerToken) {
            return res.json(
                {
                    succes: true,
                    message: "you don't have access"
                }
            )
        }

        //si el token de autorizacion se encuentra = se extrae el token real tras dividir
        const token = bearerToken.split(" ")[1];

        //verificacion y decodificacion del token
        const decoded = jwt.verify(token, secretKey);
        console.log(1,decoded)
        req.userId = decoded.userId;
        req.roleId = decoded.roleId;
        console.log(2,decoded)

        next();
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Token Invalid",
                error: error
            }
        )
    }

}

module.exports = auth;