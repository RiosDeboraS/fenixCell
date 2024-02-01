import Header from "./Header/page";
import Carousel from "@/components/carrusel";
import style from "./page.module.css";
import Footer from "@/components/footer";
import Publicidad from "@/components/publicidad";
import Store from "../components/store";

import Contact from "./contacto/page";

export default function Home() {
  return (
    <body className={style.body}>
      <Publicidad></Publicidad>
      <div>
        <Header />
      </div>
      <Carousel></Carousel>

      <Store></Store>
      <Contact></Contact>
      <Footer></Footer>
    </body>
  );
}
