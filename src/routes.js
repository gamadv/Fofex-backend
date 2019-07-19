/* Importações através do método require */
const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');


//ROTAS# =============================================
//_______O que ocorrer ao acessar a rota '/' = rota raiz

// Chamando método index do controller.
routes.get('/products', ProductController.index);



// importar para Utilizar dentro do server JS
module.exports = routes;
