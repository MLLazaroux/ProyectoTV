import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import "../styles/AdminPage.css"; // Importa los estilos si los tienes

function AdminPage() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Obtener la lista de productos al cargar la página
  useEffect(() => {
    if (user && user.rol === "admin") {
      fetchProducts();
    } else {
      setError("Acceso denegado. Se requiere rol de administrador.");
    }
  }, [user]);

  // Función para obtener los productos
  const fetchProducts = async () => {
    try {
      const response = await api.get("/productos");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error al obtener productos");
      setLoading(false);
    }
  };

  // Función para eliminar un producto
  const handleDelete = async (id) => {
    try {
      await api.delete(`/productos/${id}`);
      fetchProducts(); // Refrescar la lista de productos
    } catch (error) {
      setError("Error al eliminar el producto");
    }
  };

  // Mostrar mensajes de error
  if (error) {
    return <div>{error}</div>;
  }

  // Mostrar carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="admin-page">
      <h1>Panel de Administración</h1>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>{product.precio}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleDelete(product._id)}>Eliminar</button>
                <button>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;