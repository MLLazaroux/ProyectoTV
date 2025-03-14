import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importa Link
import { useAuth } from "../context/AuthContext";
import "../styles/LoginPage.css"; // Asegúrate de que este archivo exista

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const success = await login(email, password);
      if (success) {
        console.log("Inicio de sesión exitoso, redirigiendo...");
        navigate("/"); // Redirigir a la página principal
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      setError("Error en el servidor");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
}

export default LoginPage;