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
      <a href="https://nicolasgalarzah.mercadoshops.com.ar/MLA-1655356864-silicona-para-super-succion-plancha-celulares-_JM">
        <LocalMallIcon className={style.icon} />{" "}
      </a>
    </div>
  );
};
export default Store;
