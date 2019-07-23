/* Importações através do método require */
const mongoose = require ('mongoose');
const Product = mongoose.model('Product');

// Exportando objeto com algumas funções
// Vulgo métodos
// Listagem --->
module.exports = {
    async index (req, res){
        const {page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit: 10});
         return res.json(products);
    },

//Busca de Objetos ------->
    // Req.params.id (qual id passado na url para editar? requisição)
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
    // New True : Trazer o objeto atualizado
    async update (req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, 
            req.body, {new:true});
        return res.json(product);
    },

//Exclusão de objetos ----->

    async destroy (req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
     }
    
};

