const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. No hay token." });
  }

  try {
    // Eliminar "Bearer " antes de verificar el token
    const tokenSinBearer = token.replace("Bearer ", "");

    const decoded = jwt.verify(tokenSinBearer, process.env.JWT_SECRET || "secreto");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Token inválido" });
  }
};

module.exports = authMiddleware;
