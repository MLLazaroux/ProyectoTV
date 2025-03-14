const Product = require('../models/productoModel');

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
    try {
        const { nombre, precio, descripcion, stock } = req.body;
        const newProduct = new Product({ nombre, precio, descripcion, stock });
        await newProduct.save();
        res.status(201).json({ message: 'Producto creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto' });
    }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, descripcion, stock } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, { nombre, precio, descripcion, stock }, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Producto no encontrado' });
        res.json({ message: 'Producto actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar producto' });
    }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ message: 'Producto no encontrado' });
        res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto' });
    }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
