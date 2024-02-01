export const Body = () => {
  return (
    <div>
      <h1
        style={{
          justifyContent: "center",
          display: "flex",
          margin: "30px ",
        }}
      >
        {" "}
        Servicios
      </h1>
      <div className="row" style={{ margin: "50px" }}>
        <div
          class="card text-bg-white mx-5"
          style={{
            border: "2px solid",
            borderColor: " rgb(241, 106, 230)",
            height: "350px",
            width: "350px",
          }}
        >
          <img
            src="/celu.jpeg"
            class="card-img"
            style={{ height: "100%", width: "100%" }}
            alt="..."
          />
          <div class="card-img-overlay ">
            <h5 class="card-title" style={{ color: "white", fontSize: "50px" }}>
              Repaciones
            </h5>
            <p class="card-text"></p>
          </div>
        </div>
        <div
          class="card text-bg-white mx-5"
          style={{
            border: "2px solid",
            borderColor: " rgb(241, 106, 230)",
            height: "350px",
            width: "350px",
          }}
        >
          <img
            src="/celu.jpeg"
            class="card-img"
            style={{ height: "100%", width: "100%" }}
            alt="..."
          />
          <div class="card-img-overlay ">
            <h5 class="card-title" style={{ color: "white", fontSize: "50px" }}>
              Accesorios
            </h5>
            <p class="card-text"></p>
          </div>
        </div>
        <div
          class="card text-bg-white mx-50"
          style={{
            border: "2px solid",
            borderColor: " rgb(241, 106, 230)",
            height: "350px",
            width: "350px",
          }}
        >
          <img
            src="/celu.jpeg"
            class="card-img"
            style={{ height: "100%", width: "100%" }}
            alt="..."
          />
          <div class="card-img-overlay ">
            <h5 class="card-title" style={{ color: "white", fontSize: "50px" }}>
              Repuestos
            </h5>
            <p class="card-text"></p>
          </div>
        </div>
        <div
          class="card text-bg-white mx-5 "
          style={{
            border: "2px solid",
            borderColor: " rgb(241, 106, 230)",
            height: "350px",
            width: "350px",
          }}
        >
          <img
            src="/celu.jpeg"
            class="card-img"
            style={{ height: "100%", width: "100%" }}
            alt="..."
          />
          <div class="card-img-overlay ">
            <h5 class="card-title" style={{ color: "white", fontSize: "50px" }}>
              Celulares nuevos y usados{" "}
            </h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
