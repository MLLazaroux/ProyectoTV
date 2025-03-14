// frontend/src/pages/EditProduct.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditProduct() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Obtener los datos del producto al cargar el componente
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/productos/${id}`);
        const product = response.data;
        setNombre(product.nombre);
        setPrecio(product.precio);
        setStock(product.stock);
        setImagen(product.imagen);
      } catch (error) {
        setError("Error al cargar el producto");
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/productos/${id}`, {
        nombre,
        precio,
        stock,
        imagen,
      });
      console.log("Producto actualizado:", response.data);
      navigate("/admin"); // Redirigir al panel de administración
    } catch (error) {
      setError("Error al actualizar el producto");
    }
  };

  return (
    <div>
      <h2>Editar Producto</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default EditProduct;