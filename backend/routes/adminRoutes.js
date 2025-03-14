const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/adminController');

// 🔹 Rutas solo accesibles por administradores
router.get('/products', authMiddleware, adminMiddleware, getProducts);
router.post('/products', authMiddleware, adminMiddleware, createProduct);
router.put('/products/:id', authMiddleware, adminMiddleware, updateProduct);
router.delete('/products/:id', authMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
