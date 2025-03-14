import { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api"; // Asegúrate de tener este servicio configurado

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Verificar si hay un usuario almacenado en localStorage al cargar la aplicación
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      // Verificar si el token sigue siendo válido
      api
        .get("/auth/me", {
          headers: { Authorization: `Bearer ${storedUser.token}` },
        })
        .then((response) => {
          // Si el token es válido, actualizar el estado del usuario
          setUser({ ...response.data, token: storedUser.token });
        })
        .catch((error) => {
          console.error("Error al verificar el token:", error);
          // Si el token no es válido, eliminar el usuario de localStorage
          localStorage.removeItem("user");
          setUser(null);
        });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user: userData } = response.data;

      // Guardar el token y la información del usuario en localStorage
      const user = { ...userData, token };
      localStorage.setItem("user", JSON.stringify(user));

      // Actualizar el estado del usuario
      setUser(user);

      return true; // Indicar que el login fue exitoso
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return false; // Indicar que el login falló
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}