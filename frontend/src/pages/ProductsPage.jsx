import React, { useState } from "react";
import "../styles/ProductsPage.css";

// Importando imágenes con los nombres correctos
import aireAcondicionado from "../assets/images/Aire_Acondicionado.jpg";
import auriculares from "../assets/images/Auriculares_Inalámbricos.png";
import bicicletaElectrica from "../assets/images/Bicicleta_Eléctrica.jpg";
import cafetera from "../assets/images/Cafetera_Automática.jpg";
import cargador from "../assets/images/Cargador_Inalámbrico.jpg";
import consola from "../assets/images/Consola_de_Videojuegos.png";
import camara from "../assets/images/Cámara_de_Seguridad.jpg";
import discoDuro from "../assets/images/Disco_Duro_Externo_2TB.jpg";
import discoSSD from "../assets/images/Disco_SSD_1TB.png";
import dron from "../assets/images/Dron_Profesional.png";
import fuentePoder from "../assets/images/Fuente_de_Poder_750W.jpg";
import impresora from "../assets/images/Impresora_Multifunción.png";
import juegoOllas from "../assets/images/Juego_de_Ollas.jpg";
import laptop from "../assets/images/Laptop_Gamer.jpg";
import licuadora from "../assets/images/Licuadora_Industrial.jpg";
import ram from "../assets/images/Memoria_RAM_16GB.png";
import microondas from "../assets/images/Microondas_Digital.jpg";
import monitor from "../assets/images/Monitor_27_pulgadas.jpg";
import mouseGamer from "../assets/images/Mouse_Gamer_.jpg";
import mouseInalambrico from "../assets/images/Mouse_Inalámbrico.jpg";
import parlante from "../assets/images/Parlante_Bluetooth.jpg";
import placaMadre from "../assets/images/Placa_Madre_Gaming.png";
import reloj from "../assets/images/Reloj_Inteligente_Premium.jpg";
import silla from "../assets/images/Silla_Ergonómica.jpg";
import smartwatch from "../assets/images/Smartwatch_Deportivo.jpg";
import tablet from "../assets/images/Tablet_10_pulgadas.jpg";
import tarjetaGrafica from "../assets/images/Tarjeta_Gráfica_RTX_4070.jpg";
import teclado from "../assets/images/Teclado_Mecánico.jpg";
import televisor from "../assets/images/Televisor_55_pulgadas.jpg";
import termo from "../assets/images/Termo_Inteligente.jpg";
import webcam from "../assets/images/Webcam_HD_1080p.jpg";

// Lista de productos con nombres correctos
const products = [
  { name: "Aire Acondicionado", price: 1200, image: aireAcondicionado },
  { name: "Auriculares Inalámbricos", price: 150, image: auriculares },
  { name: "Bicicleta Eléctrica", price: 1800, image: bicicletaElectrica },
  { name: "Cafetera Automática", price: 300, image: cafetera },
  { name: "Cargador Inalámbrico", price: 50, image: cargador },
  { name: "Consola de Videojuegos", price: 500, image: consola },
  { name: "Cámara de Seguridad", price: 200, image: camara },
  { name: "Disco Duro Externo 2TB", price: 100, image: discoDuro },
  { name: "Disco SSD 1TB", price: 120, image: discoSSD },
  { name: "Dron Profesional", price: 1000, image: dron },
  { name: "Fuente de Poder 750W", price: 80, image: fuentePoder },
  { name: "Impresora Multifunción", price: 250, image: impresora },
  { name: "Juego de Ollas", price: 130, image: juegoOllas },
  { name: "Laptop Gamer", price: 2500, image: laptop },
  { name: "Licuadora Industrial", price: 90, image: licuadora },
  { name: "Memoria RAM 16GB", price: 80, image: ram },
  { name: "Microondas Digital", price: 150, image: microondas },
  { name: "Monitor 27 pulgadas", price: 350, image: monitor },
  { name: "Mouse Gamer", price: 60, image: mouseGamer },
  { name: "Mouse Inalámbrico", price: 40, image: mouseInalambrico },
  { name: "Parlante Bluetooth", price: 90, image: parlante },
  { name: "Placa Madre Gaming", price: 220, image: placaMadre },
  { name: "Reloj Inteligente Premium", price: 180, image: reloj },
  { name: "Silla Ergonómica", price: 150, image: silla },
  { name: "Smartwatch Deportivo", price: 110, image: smartwatch },
  { name: "Tablet 10 pulgadas", price: 250, image: tablet },
  { name: "Tarjeta Gráfica RTX 4070", price: 600, image: tarjetaGrafica },
  { name: "Teclado Mecánico", price: 100, image: teclado },
  { name: "Televisor 55 pulgadas", price: 800, image: televisor },
  { name: "Termo Inteligente", price: 50, image: termo },
  { name: "Webcam HD 1080p", price: 70, image: webcam },
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      <h1 className="product-title">Catálogo de Productos</h1>
      <input
        type="text"
        placeholder="Buscar productos..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">S/ {product.price}</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
