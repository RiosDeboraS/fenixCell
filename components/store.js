import LocalMallIcon from "@mui/icons-material/LocalMall";
import style from "./store.module.css";

const Store = () => {
  return (
    <div className={style.div}>
      <h1 className={style.conttext}>
        <span className={style.coloredLetter}>S</span>
        <span className={style.coloredLetter}>h</span>
        <span className={style.coloredLetter}>o</span>
        <span className={style.coloredLetter}>p</span>
      </h1>
      <br></br>
      <a href="https://nicolasgalarzah.mercadoshops.com.ar/">
        <LocalMallIcon
          style={{
            width: "300px",
            height: "300px",
            color: "#f762f7",
            cursor: "pointer",
            backgroundColor: "#f0f0f0",
            border: "5px double #f762f7",
            boxShadow:
              "3px 3px 5px rgba(0, 0, 0, 0.2), 6px 6px 10px rgba(0, 0, 0, 0.2), 9px 9px 15px rgba(0, 0, 0, 0.2)", // Agrega sombras para un efecto 3D
          }}
        />
      </a>
    </div>
  );
};
export default Store;
