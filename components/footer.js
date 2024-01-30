// Importa los estilos CSS o SCSS si los tienes
// import './Footer.module.css';
const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#dedadabc",
        color: "back",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <p>Copyright © 2024 TuNombre</p>
    </footer>
  );
};

export default Footer;