const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const usuarioService = require('./services/usuario');

const port = process.env.PORT || 5000;

//Es un middleware que serializa los cuerpos de las respuestas a notacón JSON
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'La api está online' })
});

app.get('/usuarios', usuarioService.getUsuarios);
app.post('/usuarios', usuarioService.addUsuario);

app.listen(port, () => {
    console.log(`API corriendo en el puerto ${port}`)
});


// Permite la conexiòn a clientes no browser
/*
app.use((req, res, next) => {   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token'); // If needed 
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next();
});
*/
// bloque allows

