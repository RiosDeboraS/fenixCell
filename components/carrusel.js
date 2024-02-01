"use client";
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [Carousel, setCarousel] = useState(null);

  useEffect(() => {
    import("bootstrap").then((bootstrap) => {
      const myCarouselElement = document.querySelector("#myCarousel");
      if (myCarouselElement) {
        setCarousel(
          new bootstrap.Carousel(myCarouselElement, {
            interval: 2000,
            touch: false,
          })
        );
      }
    });
  }, []);

  return (
    <div>
      <h1
        style={{
          marginBottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Servicios
      </h1>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators position-relative bottom 30 color black">
          <button
            style={{ backgroundColor: "#A9A9A9" }}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active btn-dark"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            style={{ backgroundColor: "#A9A9A9" }}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            style={{ backgroundColor: "#A9A9A9" }}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/WhatsApp Image 2024-01-30 at 13.13.01.jpeg"
              className="d-block w-500  mx-auto"
              style={{ height: "500px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/WhatsApp Image 2024-01-30 at 13.13.01.jpeg"
              className="d-block w-500  mx-auto"
              style={{ height: "500px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/WhatsApp Image 2024-01-30 at 13.13.01.jpeg"
              className="d-block w-500  mx-auto"
              style={{ height: "500px" }}
              alt="..."
            />
          </div>
        </div>
        <button
          style={{ backgroundColor: "#A9A9A9" }}
          className="carousel-control-prev btn-dark"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          style={{ backgroundColor: "#A9A9A9" }}
          className="carousel-control-next btn-dark"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
