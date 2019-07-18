// ------------- mvC -----------------\\

const mongoose = require('mongoose');

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


// Registro do Model na app.
mongoose.model('Product', ProductSchema);