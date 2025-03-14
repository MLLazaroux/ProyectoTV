const express = require("express");
const router = express.Router();
const Producto = require("../models/productModel");

// 🔹 Obtener todos los productos
router.get("/", async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.error("❌ Error al obtener productos:", error);
        res.status(500).json({ error: "Error al obtener los productos" });
    }
});

// 🔹 Obtener un producto por ID
router.get("/:id", async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json(producto);
    } catch (error) {
        console.error("❌ Error al obtener producto:", error);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
});

// 🔹 Crear un producto
router.post("/", async (req, res) => {
    try {
        const { nombre, precio, stock, imagen, descripcion } = req.body;

        if (!nombre || !precio || !stock || !imagen || !descripcion) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const nuevoProducto = new Producto({ nombre, precio, stock, imagen, descripcion });
        await nuevoProducto.save();

        res.status(201).json({ mensaje: "✅ Producto creado", producto: nuevoProducto });
    } catch (error) {
        console.error("❌ Error al crear producto:", error);
        res.status(500).json({ error: "Error al crear el producto" });
    }
});

// 🔹 Actualizar un producto
router.put("/:id", async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, imagen } = req.body;

        if (!nombre || !precio || !stock || !imagen) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            { nombre, descripcion, precio, stock, imagen },
            { new: true, runValidators: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json({ mensaje: "✅ Producto actualizado", producto: productoActualizado });
    } catch (error) {
        console.error("❌ Error al actualizar producto:", error);
        res.status(500).json({ error: "Error al actualizar producto" });
    }
});

// 🔹 Eliminar un producto
router.delete("/:id", async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json({ mensaje: "✅ Producto eliminado correctamente" });
    } catch (error) {
        console.error("❌ Error al eliminar producto:", error);
        res.status(500).json({ error: "Error al eliminar producto" });
    }
});

module.exports = router;
