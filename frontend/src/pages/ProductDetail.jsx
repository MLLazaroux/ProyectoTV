import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/productos/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error al obtener el producto:", err));
  }, [id]);

  if (!product) {
    return <h2 className="text-center text-xl">Cargando producto...</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img className="w-full max-h-80 object-cover mb-4" src={product.image} alt={product.name} />
      <p className="text-lg font-semibold text-gray-700">Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
