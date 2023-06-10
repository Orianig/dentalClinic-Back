// DECLARO LAS CONST
//direccionamiento 
const express = require('express');
//importa e contenido de db.js
const db = require('./db');
const router = require('./router');
//configuracion de la aplicación express
const app = express();
const PORT = 3000;

//ESTABLEZCO LOS APP
//para que me lea el json que viene del front
app.use(express.json());
//para gestionar todas las rutas del router
app.use(router);
//ruta general para mensaje de comprobacion de puerto
app.get('/runningPort', (req, res) => {
    return res.send('Welcome to the beginning of nothingness');
});

db.then(() => {
    //verificacion de la lectura correcta o erronea
    app.listen(PORT, () => {
        console.log('server is running on port:' + PORT);
    })
}
).catch((error) => {
    console.error('Error starting server', error.message)
})