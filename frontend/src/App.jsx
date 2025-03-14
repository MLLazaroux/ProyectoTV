import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail"; // Importamos la nueva página de detalle
import AdminHub from "./pages/AdminHub";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import CarritoPage from "./pages/CarritoPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/producto/:id" element={<ProductDetail />} /> {/* Nueva ruta */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/admin" element={<AdminHub />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
