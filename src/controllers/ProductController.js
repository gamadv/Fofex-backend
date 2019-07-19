/* Importações através do método require */
const mongoose = require ('mongoose');
const Product = mongoose.model('Product');


// Exportando objeto com algumas funções
module.exports = {
    async index (req, res){
        const products = await Product.find();
         return res.json(products);
    },

//Crianção de objetos ----->
    async store (req,res){
        const product = await Product.create(req.body);
        return res.json(product);

    },
};

