import React from "react";
import "../../src/styles/components/pages/HomePages.css";

const HomePage = (props) => {
  return (
    <header>
      <div className="hero">
        <h1>
          Estudio de Tatuajes <span>BlackFish</span> Tattoo
        </h1>
        <h3>Experiencia. Compromiso. Valor.</h3>
        <a href="/formulario" rel="noopener noreferrer">
          <button type="button" className="presupuesto">
            Solicita tú turno
          </button>
        </a>
      </div>
      <div className="fraseHeader">
        <h2>
          "Los tatuajes son las historias de tu corazón, escritas en tu piel".
        </h2>
        <h6>- Charles De Lint</h6>
      </div>
    </header>
  );
};

export default HomePage;
