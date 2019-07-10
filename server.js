/* Importação do Express através 
do método require, parâmetro Express
Acesso ao Express
*/
const express = require('express');

/* Executando Função do Express.
Express retorna função
*/
const app = express();

///####### ROTAS
/* O que ocorrer ao acessar a rota
'/' = rota raiz
*/
app.get('/',(req,res)=>{
    res.send('Teste Bagaça32444444444')
});

//Ouvinte de porta -> 3001
app.listen(3333);