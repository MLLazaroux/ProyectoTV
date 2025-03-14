import React from "react";
import { useCarrito } from "../context/CarritoContext";

function CarritoPage() {
  const { carrito, eliminarDelCarrito, calcularTotal } = useCarrito();

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {carrito.map((producto) => (
        <div key={producto._id}>
          <h3>{producto.nombre}</h3>
          <p>Precio: S/ {producto.precio}</p>
          <button onClick={() => eliminarDelCarrito(producto._id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: S/ {calcularTotal()}</h2>
    </div>
  );
}

export default CarritoPage;