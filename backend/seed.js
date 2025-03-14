// backend/seed.js
const mongoose = require("mongoose");
const Producto = require("./models/Producto");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

const productos = [
  { nombre: "Laptop Gamer", descripcion: "Laptop potente con RTX 4060", precio: 3500, stock: 10, imagen: "/images/Laptop_Gamer.jpg" },
  { nombre: "Teclado Mecánico", descripcion: "RGB y switches Cherry MX", precio: 150, stock: 30, imagen: "/images/Teclado_Mecánico.jpg" },
  { nombre: "Monitor 27 pulgadas", descripcion: "144Hz Full HD", precio: 250, stock: 15, imagen: "/images/Monitor_27_pulgadas.jpg" },
  { nombre: "Mouse Gamer", descripcion: "Sensor óptico 16K DPI", precio: 80, stock: 25, imagen: "/images/Mouse_Gamer_.jpg" },
  { nombre: "Silla Ergonómica", descripcion: "Ideal para oficina y gaming", precio: 300, stock: 8, imagen: "/images/Silla_Ergonómica.jpg" },
  { nombre: "Disco SSD 1TB", descripcion: "Alta velocidad NVMe", precio: 120, stock: 20, imagen: "/images/Disco_Duro_Externo_2TB.jpg" },
  { nombre: "Tarjeta Gráfica RTX 4070", descripcion: "8GB GDDR6", precio: 700, stock: 5, imagen: "/images/Tarjeta_Gráfica_RTX_4070.jpg" },
  { nombre: "Auriculares Inalámbricos", descripcion: "Sonido envolvente 7.1", precio: 200, stock: 12, imagen: "/images/Webcam_HD_1080p.jpg" },
  { nombre: "Fuente de Poder 750W", descripcion: "80 Plus Gold", precio: 110, stock: 10, imagen: "/images/Fuente_de_Poder_750W.jpg" },
  { nombre: "Placa Madre Gaming", descripcion: "Chipset Z690", precio: 250, stock: 7, imagen: "/images/Smartwatch_Deportivo.jpg" },
  { nombre: "Memoria RAM 16GB", descripcion: "DDR5 6000MHz", precio: 180, stock: 20, imagen: "/images/Tablet_10_pulgadas.jpg" },
  { nombre: "Webcam HD 1080p", descripcion: "Ideal para streaming", precio: 90, stock: 15, imagen: "/images/Webcam_HD_1080p.jpg" },
  { nombre: "Router WiFi 6", descripcion: "Alta velocidad y estabilidad", precio: 130, stock: 12, imagen: "/images/Reloj_Inteligente_Premium.jpg" },
  { nombre: "Smartwatch Deportivo", descripcion: "Monitoreo de salud y GPS", precio: 200, stock: 18, imagen: "/images/Smartwatch_Deportivo.jpg" },
  { nombre: "Tablet 10 pulgadas", descripcion: "Ideal para productividad", precio: 400, stock: 10, imagen: "/images/Tablet_10_pulgadas.jpg" },
  { nombre: "Impresora Multifunción", descripcion: "Imprime, escanea y copia", precio: 250, stock: 8, imagen: "/images/Licuadora_Industrial.jpg" },
  { nombre: "Disco Duro Externo 2TB", descripcion: "Almacenamiento seguro", precio: 90, stock: 22, imagen: "/images/Disco_Duro_Externo_2TB.jpg" },
  { nombre: "Cámara de Seguridad", descripcion: "Visión nocturna y detección de movimiento", precio: 150, stock: 14, imagen: "/images/Juego_de_Ollas.jpg" },
  { nombre: "Cargador Inalámbrico", descripcion: "Carga rápida Qi", precio: 60, stock: 25, imagen: "/images/Termo_Inteligente.jpg" },
  { nombre: "Microondas Digital", descripcion: "Potente y eficiente", precio: 220, stock: 10, imagen: "/images/Microondas_Digital.jpg" },
  { nombre: "Aire Acondicionado", descripcion: "220V con control remoto", precio: 550, stock: 5, imagen: "/images/Aire_Acondicionado.jpg" },
  { nombre: "Televisor 55 pulgadas", descripcion: "4K Ultra HD", precio: 700, stock: 6, imagen: "/images/Televisor_55_pulgadas.jpg" },
  { nombre: "Parlante Bluetooth", descripcion: "Sonido potente y batería de larga duración", precio: 120, stock: 15, imagen: "/images/Parlante_Bluetooth.jpg" },
  { nombre: "Consola de Videojuegos", descripcion: "Nueva generación con 1TB de almacenamiento", precio: 600, stock: 8, imagen: "/images/Reloj_Inteligente_Premium.jpg" },
  { nombre: "Cafetera Automática", descripcion: "Con molinillo integrado", precio: 350, stock: 10, imagen: "/images/Licuadora_Industrial.jpg" },
  { nombre: "Reloj Inteligente Premium", descripcion: "Monitor ECG y oxígeno en sangre", precio: 500, stock: 7, imagen: "/images/Reloj_Inteligente_Premium.jpg" },
  { nombre: "Dron Profesional", descripcion: "Cámara 4K y estabilización avanzada", precio: 1200, stock: 4, imagen: "/images/Juego_de_Ollas.jpg" },
  { nombre: "Bicicleta Eléctrica", descripcion: "Autonomía de 50km", precio: 1500, stock: 3, imagen: "/images/Termo_Inteligente.jpg" },
  { nombre: "Licuadora Industrial", descripcion: "Motor de alta potencia", precio: 280, stock: 9, imagen: "/images/Licuadora_Industrial.jpg" },
  { nombre: "Juego de Ollas", descripcion: "Acero inoxidable de alta calidad", precio: 180, stock: 14, imagen: "/images/Juego_de_Ollas.jpg" },
  { nombre: "Termo Inteligente", descripcion: "Pantalla táctil y sensor de temperatura", precio: 50, stock: 30, imagen: "/images/Termo_Inteligente.jpg" },
];

const seedDatabase = async () => {
  try {
    await Producto.deleteMany(); // Elimina todos los productos existentes
    await Producto.insertMany(productos); // Inserta los nuevos productos
    console.log("Base de datos sembrada exitosamente");
  } catch (error) {
    console.error("Error al sembrar la base de datos:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();