import React from "react";

import styles from "./contacto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
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
          href="https://www.facebook.com/FenixCellDte"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className={styles.facebook} />
        </a>

        <a
          href="https://www.instagram.com/fenixcelldte/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.instagram} />
        </a>

        <a
          href="https://www.tiktok.com/@fenixcelldte "
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} className={styles.tiktok} />
        </a>
        <a
          href="https://www.youtube.com/@FenixCellDte"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className={styles.you} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=543435728485&text=Hola%21"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsapp} />
        </a>
        <a href="fenixcelldte@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className={styles.email} />
        </a>
      </div>
      <br />
      <br />
      <br />
      <FontAwesomeIcon icon={faMapLocationDot} className={styles.ubi} />
      <p>Dirección: Eva Peron 456, Diamante, Argentina</p>

      <br />
    </div>
  );
};

export default Contact;
