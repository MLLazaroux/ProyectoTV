const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// 🔹 Registrar usuario
router.post("/register", register);

// 🔹 Login usuario
router.post("/login", login);

// 🔹 Obtener perfil (ruta protegida)
router.get("/perfil", authMiddleware, getProfile);

module.exports = router;
