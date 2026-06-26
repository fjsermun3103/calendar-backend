const dns = require('dns')
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

require('dotenv').config();

// Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use( express.static('public'));

// Lectura y parseo del body
app.use( express.json() )


// Rutas
app.use('/api/auth', require('./routes/auth'));

// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
} );

