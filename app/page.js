import Header from "./Header/page";
import Carrusel from "@/components/carrusel";
import style from "./page.module.css";
import Footer from "@/components/footer";
import Publicidad from "@/components/publicidad";
import Store from "../components/store";
import { Body } from "./body/page";
import Contact from "./contacto/page";

export default function Home() {
  return (
    <body className={style.body}>
      <Publicidad></Publicidad>
      <div>
        <Header />
      </div>
      <Carrusel></Carrusel>

      <Store></Store>
      <Contact></Contact>
      <Footer></Footer>
    </body>
  );
}
