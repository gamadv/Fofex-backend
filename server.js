/*#######################################################################################
###################################-- MAIN---###########################################
#######################################################################################
*/
/* Importações através do método require */
const express = require('express');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');

//INICIANDO APP# ===================================== 
//_______________Executando Função do Express que retorna função 
const app = express();

/* Permitir enviar dados para o app em 
Form Json */
app.use(express.json());

//INICIANDO DB#=======================================
//_____________Mudar IP ao trocar de WORKSPACE!
mongoose.connect('mongodb://192.168.99.100:27017:27017/nodeapi',{ useNewUrlParser: true});
requireDir('./src/models/');

// ROTAS#==============================================
/* Coringa: Receber todo tipo de requisição apartir da rota api
E mandar para o src rout*/ 
app.use('/api', require('./src/routes'));

//Ouvinte de porta -> 3001
app.listen(3333);
