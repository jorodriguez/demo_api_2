
//Destructuracion de objetos 
const { pool } = require('../db/conexion');
const handle = require('../helpers/handlersErrors');

const GET_ALL_QUERY = "SELECT * FROM usuario";
const ADD = "INSERT INTO USUARIO(nombre,apellidos) VALUES($1,$2) RETURNING ID;";

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

const addUsuario = (request, response) => {
    console.log("@addUsuario");
    try {      
        let params = {nombre,apellidos} =  request.body;

        pool.query(ADD,[nombre,apellidos],
                (error, results) => {
                if (error) {
                    handle.callbackError(error, response);                    
                    return;
                }
                let usuario = results.rows[0];                
                response.status(200).json(usuario);
            });
    } catch (e) {
        handle.callbackErrorNoControlado(e, response);
    }
};



const updateUsuario = (request, response) => {
    console.log("@addUsuario");
    try {      
        let params = {nombre,apellidos} =  request.body;

        pool.query(ADD,[nombre,apellidos],
                (error, results) => {
                if (error) {
                    handle.callbackError(error, response);                    
                    return;
                }
                let usuario = results.rows[0];                
                response.status(200).json(usuario);
            });
    } catch (e) {
        handle.callbackErrorNoControlado(e, response);
    }
};


module.exports = {
    getUsuarios,addUsuario
}