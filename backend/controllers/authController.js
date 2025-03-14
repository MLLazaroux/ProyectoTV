const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const SECRET_KEY = process.env.JWT_SECRET || "secreto"; // 🔹 Definir clave secreta

// 🔹 Registrar usuario
const register = async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  try {
    // Validación simple
    if (!nombre || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya está registrado" });
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ nombre, email, password: hashedPassword, rol });

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// 🔹 Iniciar sesión con generación de token
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

    // 🔹 Incluir `rol` en el token
    const token = jwt.sign(
      { userId: user._id, rol: user.rol }, 
      SECRET_KEY, 
      { expiresIn: "2h" }
    );

    res.json({ token, usuario: { nombre: user.nombre, email: user.email, rol: user.rol } });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// 🔹 Obtener perfil del usuario autenticado
const getProfile = async (req, res) => {
  try {
    const usuario = await User.findById(req.user.userId).select("-password");
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { register, login, getProfile };
