"use client";

import style from "./main.module.css";

const main = () => {
  return (
    <div className={style.contenido}>
      <h1 className={style.h1}>
        <span className={style.spam1}>Fenix</span>
        <span>Cell</span>
        <nav>
          <a
            href="https://nicolasgalarzah.mercadoshops.com.ar/"
            className={style.link}
          >
            Tienda
          </a>
        </nav>
      </h1>
    </div>
  );
};
export default main;
