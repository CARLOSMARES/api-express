const router = require("express").Router;

const rutas = router();

rutas.get("/", (req, res)=>{

    res.send('Hola Mundo!!!');

});

module.exports = rutas;