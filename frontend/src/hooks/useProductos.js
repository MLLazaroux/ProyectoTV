import { useState, useEffect } from "react";
import api from "../services/api";

function useProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        api.get("/productos")
            .then(response => setProductos(response.data))
            .catch(error => console.error("Error al obtener productos:", error));
    }, []);

    return productos;
}

export default useProductos;
