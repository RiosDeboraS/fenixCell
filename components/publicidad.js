"use client";
import React, { useState, useEffect } from "react";
import style from "./publicidad.module.css";
import ParticlesWall from "@/components/wallpeaper.jsx/ParticlesWall";

const images = [
  "/Captura de pantalla (184).png",
  "/Captura de pantalla (183).png",
  "/Captura de pantalla (185).png",
  "/Captura de pantalla (185).png",
  "/Captura de pantalla (187).png",
];

const Publicidad = ({ intervalo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalo);

    return () => clearInterval(interval);
  }, [intervalo]);

  return (
    <>
      <ParticlesWall></ParticlesWall>
      <div className={style.publi}>
        <img
          src={images[currentIndex]}
          alt="Publicidad"
          className={style.img}
        />
      </div>
    </>
  );
};

export default Publicidad;
