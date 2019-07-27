/*#######################################################################################
###################################-- MAIN---###########################################
#######################################################################################
*/
/* Importações através do método require */
const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');

//INICIANDO APP# ===================================== 
//_______________Executando Função do Express que retorna função 
const app = express();

/* Permite enviar dados para o app em 
Form Json */
app.use(express.json());
/*
Permite acesso de outros endereços ao app
*/
app.use(cors());

//INICIANDO DB#=======================================
//_____________Mudar IP ao trocar de WORKSPACE!
// -> 
// mongoose.connect('mongodb://192.168.99.100:27017/nodeapi',{ useNewUrlParser: true});
mongoose.connect('mongodb+srv://nodeapi:4812012@cluster0-by1ky.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
})

requireDir('./src/models/');

/* ----> Mongo DB Altas
    mongoose.connect('mongodb+srv://nodeapi:4812012@cluster0-by1ky.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser: true, })
*/

// ROTAS#==============================================
/* Coringa: Receber todo tipo de requisição apartir da rota api
E mandar para o src rout*/ 
app.use('/api', require('./src/routes'));



//Ouvinte de porta -> 3001
app.listen(process.env.Port || 3333);

// Acesso para variáveis de ambiente do heroku
