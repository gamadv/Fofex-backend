/* Importações através do método require */
const mongoose = require ('mongoose');
const Product = mongoose.model('Product');


// Exportando objeto com algumas funções
module.exports = {
    async index (req, res){


        const products = await Product.find();

    
        return res.json(products);

    },
};