// DECLARO LAS CONST

//direccionamiento 
const express = require('express');
//configuracion de la aplicación express
const app = express();
//importa e contenido de db.js
const db = require('./db');

const PORT = 3000;

//ESTABLEZCO LOS APP

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