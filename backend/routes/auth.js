// backend/routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Endpoint para registrar un nuevo usuario
router.post("/register", async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "El correo electrónico ya está registrado" });
    }

    // Crear un nuevo usuario
    const newUser = new User({ nombre, email, password });
    await newUser.save();

    // Generar un token JWT para el nuevo usuario
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // El token expira en 1 hora
    });

    // Devolver el token y los datos del usuario
    res.status(201).json({
      token,
      user: {
        _id: newUser._id,
        nombre: newUser.nombre,
        email: newUser.email,
        rol: newUser.rol,
      },
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Endpoint para iniciar sesión
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const user = await User.findOne({ email });

    // Verificar si el usuario existe y si la contraseña es correcta
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // El token expira en 1 hora
    });

    // Devolver el token y los datos del usuario
    res.json({
      token,
      user: {
        _id: user._id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
      },
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});


module.exports = router;