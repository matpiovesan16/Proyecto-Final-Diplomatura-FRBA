import React from "react";
import fotos from "../assets/img/galeria/galeria";
import "../styles/components/pages/galeria.css";

const Galeria = () => {
  let imagenes = [
    { img: fotos.img1 },
    { img: fotos.img2 },
    { img: fotos.img3 },
    { img: fotos.img4 },
    { img: fotos.img5 },
    { img: fotos.img6 },
    { img: fotos.img7 },
    { img: fotos.img8 },
    { img: fotos.img9 },
    { img: fotos.img10 },
    { img: fotos.img11 },
    { img: fotos.img12 },
    { img: fotos.img13 },
    { img: fotos.img14 },
    { img: fotos.img15 },
  ];
  let contador = 0;
  const contenedor = document.querySelector(".slideshow");
  const overlay = document.querySelector(".overlay");
  const galeria_imagenes = document.querySelectorAll(".galeria img");
  const img_slideshow = document.querySelector(".slideshow img");

  function slide(event) {
    let atras = contenedor.querySelector(".atras");
    let adelante = contenedor.querySelector(".adelante");
    let img = contenedor.querySelector("img");
    let tgt = event.target;
    if (tgt == atras) {
      if (contador > 0) {
        img.src = imagenes[contador - 1].img;
        contador--;
      } else {
        img.src = imagenes[imagenes.length - 1].img;
        contador = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (contador < imagenes.length - 1) {
        img.src = imagenes[contador + 1].img;
        contador++;
      } else {
        img.src = imagenes[0].img;
        contador = 0
      }
    }
  }

  Array.from(galeria_imagenes).forEach((img) => {
    img.addEventListener("click", (event) => {
      const imagen_seleccionada = +event.target.dataset.imgMostrar;
      img_slideshow.src = imagenes[imagen_seleccionada].img;
      contador = imagen_seleccionada;
      overlay.style.opacity = 1;
      overlay.style.visibility = "visible";
    });
  });

  function botonCerrar() {
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
  }

  return (
    <div className="container">
      <div className="overlay">
        <div className="slideshow" onClick={slide}>
          <span className="btn_cerrar" onClick={botonCerrar}>
            &times;
          </span>
          <div className="botones adelante">
            <i className="mdi mdi-arrow-right-circle-outline"></i>
          </div>
          <div className="botones atras">
            <i className="mdi mdi-arrow-left-circle-outline"></i>
          </div>
          <img src="" alt="" id="img_slideshow" />
        </div>
      </div>
      <div className="encabezado">
        <h1>Trabajos hechos en BlackFish Tatto0</h1>
      </div>
      <section className="galeria">
        <div className="columna">
          <img src={fotos.img1} alt="" data-img-mostrar="0" />
          <img src={fotos.img2} alt="" data-img-mostrar="1" />
          <img src={fotos.img3} alt="" data-img-mostrar="2" />
          <img src={fotos.img4} alt="" data-img-mostrar="3" />
          <img src={fotos.img5} alt="" data-img-mostrar="4" />
        </div>
        <div className="columna">
          <img src={fotos.img6} alt="" data-img-mostrar="5" />
          <img src={fotos.img7} alt="" data-img-mostrar="6" />
          <img src={fotos.img8} alt="" data-img-mostrar="7" />
          <img src={fotos.img9} alt="" data-img-mostrar="8" />
          <img src={fotos.img10} alt="" data-img-mostrar="9" />
        </div>
        <div className="columna">
          <img src={fotos.img11} alt="" data-img-mostrar="10" />
          <img src={fotos.img12} alt="" data-img-mostrar="11" />
          <img src={fotos.img13} alt="" data-img-mostrar="12" />
          <img src={fotos.img14} alt="" data-img-mostrar="13" />
          <img src={fotos.img15} alt="" data-img-mostrar="14" />
        </div>
      </section>
    </div>
  );
};

export default Galeria;
