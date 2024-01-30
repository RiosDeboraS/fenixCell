import Header from "./Header/page";
import Carrusel from "@/components/carrusel";
import style from "./page.module.css";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <body className={style.body}>
      <div>
        <Header />
      </div>
      <Carrusel></Carrusel>
      <Footer></Footer>
    </body>
  );
}
