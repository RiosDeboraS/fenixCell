import Header from "./Header/page";
import Carousel from "@/components/carrusel";
import style from "./page.module.css";
import Footer from "@/components/footer";
import Publicidad from "@/components/publicidad";
import Store from "../components/store";
import Main from "./main/page";
import Contact from "../components/contacto";
import { Calidades } from "@/components/calidades";

export default function Home() {
  return (
    <body className={style.body}>
      <Publicidad intervalo={4000}></Publicidad>
      <div>
        <Header />
      </div>

      <Main></Main>
      <Carousel></Carousel>
      <br></br>
      <br></br>

      <Calidades></Calidades>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Store></Store>
      <Contact></Contact>
      <Footer></Footer>
    </body>
  );
}
