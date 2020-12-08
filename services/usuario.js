
//Destructuracion de objetos 
const { pool } = require('../db/conexion');
const handle = require('../helpers/handlersErrors');

const GET_ALL_QUERY = "SELECT * FROM si_usuario WHERE eliminado = false";

const getUsuarios = (request, response) => {
    console.log("@getUsuarios");
    try {      
        pool.query(GET_ALL_QUERY,(error, results) => {
                if (error) {
                    handle.callbackError(error, response);                    
                    return;
                }
                let usuarios = results.rows;                
                response.status(200).json(usuarios);
            });
    } catch (e) {
        handle.callbackErrorNoControlado(e, response);
    }
};

module.exports = {
    getUsuarios
}