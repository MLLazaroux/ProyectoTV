// frontend/src/pages/AdminHub.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function AdminHub() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Obtener productos y usuarios al cargar el panel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await api.get("/productos");
        const usersResponse = await api.get("/usuarios");
        setProducts(productsResponse.data);
        setUsers(usersResponse.data);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los datos");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para eliminar un producto
  const handleDeleteProduct = async (id) => {
    try {
      await api.delete(`/productos/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="admin-hub">
      <h1>AdminHub</h1>
      <div className="admin-container">
        {/* Sección de Productos */}
        <section>
          <h2>Gestión de Productos</h2>
          <Link to="/admin/add-product" className="btn-add">
            Agregar Producto
          </Link>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.nombre}</td>
                  <td>${product.precio}</td>
                  <td>{product.stock}</td>
                  <td>
                    <Link to={`/admin/edit-product/${product._id}`} className="btn-edit">
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="btn-delete"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Sección de Usuarios */}
        <section>
          <h2>Usuarios Registrados</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.nombre}</td>
                  <td>{user.email}</td>
                  <td>{user.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default AdminHub;