const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    imagen: { type: String },
    descripcion: { type: String }
});

const Producto = mongoose.model("Producto", productSchema);

module.exports = Producto;
