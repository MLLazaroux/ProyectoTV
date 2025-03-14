const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Para manejar variables de entorno

const app = express();

// 🔹 Conexión a MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("🔹 Conectado a MongoDB"))
    .catch((error) => console.error("❌ Error de conexión a MongoDB:", error));

// 🔹 Configurar CORS
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// 🔹 Middleware para procesar JSON
app.use(express.json());

// 🔹 Importar rutas
const productsRoutes = require("./routes/products");
app.use("/api/products", productsRoutes);

// 🔹 Verificación de estado del servidor
app.get("/", (req, res) => {
    res.send("API en ejecución...");
});

// 🔹 Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
