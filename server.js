/* Importações através do método require */
const express = require('express');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');
//INICIANDO APP# ===================================== 
//_______________Executando Função do Express que retorna função 
const app = express();

//INICIANDO DB#=======================================
//_____________Mudar IP ao trocar de WORKSPACE!
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi',{ useNewUrlParser: true});
requireDir('./src/models/');


const Product = mongoose.model('Product');

//ROTAS# =============================================
//_______O que ocorrer ao acessar a rota '/' = rota raiz

app.get('/',(req,res)=>{
    Product.create({
        title: "Criando Teste React",
        description: 'Construindo Schema Teste',
        url:'www.google.com'
    })

    res.send('Teste Bagaça32444444444')
});

//Ouvinte de porta -> 3001
app.listen(3333);