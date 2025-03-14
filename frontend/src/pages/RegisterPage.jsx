import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importa useNavigate y Link una sola vez
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

function RegisterPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Hacer una solicitud al endpoint /auth/register
      const response = await api.post("/auth/register", { nombre, email, password });
      const { token, user } = response.data;

      // Guardar el token y la información del usuario en localStorage
      localStorage.setItem("user", JSON.stringify({ ...user, token }));

      // Actualizar el estado del usuario
      login(email, password);

      // Redirigir a la página principal
      navigate("/");
    } catch (error) {
      console.error("Error al registrarse:", error);
      setError(error.response?.data?.error || "Error en el servidor");
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
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
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
}

export default RegisterPage;