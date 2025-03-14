import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";  // Asegúrate de que el archivo está en esta ruta

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
 