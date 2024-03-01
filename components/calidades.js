import Style from "./calidades.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Calidades = () => {
  return (
    <div className={Style.container}>
      <img
        src="/WhatsApp Image 2024-03-01 at 10.36.23 (1).jpeg"
        alt="cualidades"
        className={Style.image}
      />
      <br></br>

      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={{
          backgroundColor: "#b202b821",
          border: "1px solid #ddd",
          borderRadius: "10px",
          margin: "20px ",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="accordion-item" style={{ border: "none" }}>
          <h2
            className="accordion-header"
            style={{ backgroundColor: "#b202b821", border: "none" }}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{
                color: "#333",
                border: "none",
                fontWeight: "bold",
                background: "#b202b821",
              }}
            >
              SERVICE PACK
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{ backgroundColor: "#b202b821", border: "none" }}
          >
            <div
              className="accordion-body"
              style={{ padding: "1.25rem 1.5rem" }}
            >
              Son repuestos de calidad Original, son producidos en fabricas
              certificadas que tienen una revision y certificación a nivel
              mundial. Se utilizan para reparar dispositivos con repuestos 100%
              originales que no tienen daños ni defectos de fabricación.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "none" }}>
          <h2
            className="accordion-header"
            style={{ backgroundColor: "#b202b821", border: "none" }}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{
                color: "#333",
                border: "none",
                fontWeight: "bold",
                background: "#b202b821",
              }}
            >
              GOLD EDITION INCELL – OLED
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{ backgroundColor: "#b202b821", border: "none" }}
          >
            <div
              className="accordion-body"
              style={{ padding: "1.25rem 1.5rem" }}
            >
              El término Golden Edition Incell u Oled se le da a piezas que se
              fabrican con materiales de inferior calidad que una pieza OEM y
              son 100% testeados antes de ser entregados para corroborar su
              correcto funcionamiento. Todas las copias son grado AAA o AAAA.
              INCELL es un tipo de modulo que es mas fino, resistente y posee
              una mejorar calidad que un modulo economico, sin llegar a una
              calidad OLED significa que utiliza un modulo de calidad superior
              que se lo define como OLED.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={{ border: "none" }}>
          <h2
            class="accordion-header"
            style={{ backgroundColor: "#b202b821", border: "none" }}
          >
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{
                color: "#333",
                border: "none",
                fontWeight: "bold",
                background: "#b202b821",
              }}
            >
              BLACK EDITION – OEM (ORIGINAL)
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            style={{ backgroundColor: "#b202b821", border: "none" }}
          >
            <div class="accordion-body" style={{ padding: "1.25rem 1.5rem" }}>
              El término Black Edition u Original se le da a piezas que se
              fabrican con materiales que son en su mayorias igual a las
              originales y son 100% testeados antes de ser entregados para
              corroborar su correcto funcionamiento.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
