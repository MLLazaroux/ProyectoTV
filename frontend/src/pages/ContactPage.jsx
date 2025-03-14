import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-container">
      <h2>Contáctanos</h2>
      <p>Si tienes alguna duda, escríbenos.</p>
      <form>
        <label>Nombre:</label>
        <input type="text" placeholder="Tu nombre" />
        <label>Correo:</label>
        <input type="email" placeholder="Tu correo" />
        <label>Mensaje:</label>
        <textarea placeholder="Escribe tu mensaje aquí"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactPage;
