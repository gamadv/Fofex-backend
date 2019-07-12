/* Importações através do método require */
const express = require('express');
const mongoose = require ('mongoose');

//======================================== INICIANDO APP#
// Executando Função do Express que retorna função 
const app = express();

//======================================== INICIANDO DB#



//======================================== ROTAS#
//* O que ocorrer ao acessar a rota '/' = rota raizz

app.get('/',(req,res)=>{
    res.send('Teste Bagaça32444444444')
});

//Ouvinte de porta -> 3001
app.listen(3333);