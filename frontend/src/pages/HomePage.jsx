import "../styles/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Bienvenido a TecnoShop</h1>
        <p>Encuentra la mejor tecnología al mejor precio</p>
        <Link to="/productos">
          <button className="explore-button">Ver Productos</button>
        </Link>
      </header>

      <section className="promo-section">
        <h2>🔥 Promociones Especiales 🔥</h2>
        <div className="promo-products">
          <div className="promo-card">
            <img src="/images/Laptop_Gamer.jpg" alt="Laptop Gamer" />
            <h3>Laptop Gamer</h3>
            <p>Antes: <span className="old-price">S/ 5000</span> Ahora: <span className="new-price">S/ 4500</span></p>
          </div>

          <div className="promo-card">
            <img src="/images/Tarjeta_Gráfica_RTX_4070.jpg" alt="RTX 4070" />
            <h3>Tarjeta Gráfica RTX 4070</h3>
            <p>Antes: <span className="old-price">S/ 900</span> Ahora: <span className="new-price">S/ 700</span></p>
          </div>

          <div className="promo-card">
            <img src="/images/Smartwatch_Deportivo.jpg" alt="Smartwatch Deportivo" />
            <h3>Smartwatch Deportivo</h3>
            <p>Antes: <span className="old-price">S/ 250</span> Ahora: <span className="new-price">S/ 200</span></p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2>Categorías Populares</h2>
        <div className="categories">
          <div className="category-card">💻 Laptops</div>
          <div className="category-card">🖥 Monitores</div>
          <div className="category-card">⌨️ Periféricos</div>
          <div className="category-card">📱 Accesorios</div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
