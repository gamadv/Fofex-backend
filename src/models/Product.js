// ------------- mvC -----------------\\
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// Campos são passados como objeto dentro do SCHEMA ({obj})
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    url:{
        type: String,
        required: true,
    },
    createdAT:{
        type: Date,
        default: Date.now,
    },
});


ProductSchema.plugin(mongoosePaginate);

// Registro do Model na app.
mongoose.model('Product', ProductSchema);