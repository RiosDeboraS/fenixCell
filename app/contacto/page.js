import React from "react";
import styles from "./contacto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className={styles.contenedor}>
      <h1>Contacto</h1>
      <p>
        Si tienes alguna pregunta o quieres contactarnos, puedes hacerlo a
        través de los siguientes medios:
      </p>
      <h1 className={styles.redesSociales}>Nuestras Redes Sociales</h1>
      <div className={styles.redesSociales}>
        <a
          href="https://www.facebook.com/miempresa"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className={styles.facebook} />
        </a>

        <a
          href="https://www.instagram.com/miempresa"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.instagram} />
        </a>

        <a
          href="https://www.tiktok.com/@miempresa"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} className={styles.tiktok} />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=549111234567&text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20..."
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp} />
        </a>
      </div>{" "}
      <p>Dirección: Calle Mayor 123, Ciudad</p>
      <p>Email: info@miempresa.com</p>
      <br />
    </div>
  );
};

export default Contact;
