import "bootstrap/dist/css/bootstrap.min.css";

const publicidad = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide mt-4 mb-4"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/celu.jpeg"
            className="d-block   mx-auto"
            style={{ height: "800px", width: "900px" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/WhatsApp Image 2024-01-30 at 13.13.01.jpeg"
            className="d-block   mx-auto"
            style={{ height: "800px", width: "900px" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/WhatsApp Image 2024-01-30 at 13.13.01.jpeg"
            className="d-block   mx-auto"
            style={{ height: "800px", width: "900px" }}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};
export default publicidad;
