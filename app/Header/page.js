import style from "./header.module.css";

const header = () => {
  return (
    <div className={style.body}>
      <header className={style.header}>
        <img src="/WhatsApp Image 2024-01-30 at 13.13.01.jpeg" alt="logo"></img>
        <h1>
          <span className={style.spam1}>Fenix</span>
          <span>Cell</span>
        </h1>
      </header>
    </div>
  );
};
export default header;
