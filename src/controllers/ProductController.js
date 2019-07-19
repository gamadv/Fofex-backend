/* Importações através do método require */
const mongoose = require ('mongoose');
const Product = mongoose.model('Product');

// Exportando objeto com algumas funções
// Listagem --->
module.exports = {
    async index (req, res){
        const products = await Product.find();
         return res.json(products);
    },

//Busca de Objetos ------->

    async show (req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

//Crianção de objetos ----->

    async store (req,res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

//Alteração de objetos ----->
    
    async update (req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, 
            req.body, {new:true});
        return res.json(product);
    },

//Exclusão de objetos ----->

    async destroy (req,res){

    }
    
};

