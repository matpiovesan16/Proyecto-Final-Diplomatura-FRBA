import React from "react";
import fotosTestimonios from '../assets/img/testimonios/testimonios'
import "../styles/components/pages/testimonios.css";

const Testimonios = () => {
  const cambioOrdenIzquierda = function () {
    var cambioTestimonios = document.getElementsByClassName(
      "testimonios__contenedor"
    );
    var testimonios = document.getElementsByClassName(
      "testimonios__contenedor order1"
    );

    var i = 0;
    var b = 0;

    do {
      if (cambioTestimonios[i].className === "testimonios__contenedor order1") {
        if (i == 2) {
          cambioTestimonios[i - 1].setAttribute(
            "class",
            "testimonios__contenedor order1"
          );
          cambioTestimonios[i - 2].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          cambioTestimonios[i].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          b = 3;
        }

        if (i == 1) {
          cambioTestimonios[i - 1].setAttribute(
            "class",
            "testimonios__contenedor order1"
          );
          cambioTestimonios[i].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          b = 3;
        }

        if (i == 0) {
          cambioTestimonios[i + 2].setAttribute(
            "class",
            "testimonios__contenedor order1"
          );
          cambioTestimonios[i].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          b = 3;
        }
      }

      i++;
      b++;
    } while (b < 3);
  };

  const cambioOrdenDerecha = function () {
    var cambioTestimonios = document.getElementsByClassName(
      "testimonios__contenedor"
    );
    var testimonios = document.getElementsByClassName(
      "testimonios__contenedor order1"
    );

    var i = 0;
    var b = 0;

    do {
      if (cambioTestimonios[i].className === "testimonios__contenedor order1") {
        if (i == 2) {
          cambioTestimonios[i - 2].setAttribute(
            "class",
            "testimonios__contenedor order1"
          );
          cambioTestimonios[i - 1].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          cambioTestimonios[i].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          b = 3;
        }
        if (i == 1) {
          cambioTestimonios[i + 1].setAttribute(
            "class",
            "testimonios__contenedor order1"
          );
          cambioTestimonios[i - 1].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          cambioTestimonios[i].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          b = 3;
        }
        if (i == 0) {
          cambioTestimonios[i + 1].setAttribute(
            "class",
            "testimonios__contenedor order1"
          );
          cambioTestimonios[i].setAttribute(
            "class",
            "testimonios__contenedor order3"
          );
          b = 3;
        }
      }

      i++;
      b++;
    } while (b < 3);
  };
  return (
    <div class="testimonios">
      <h1 class="testimonios__titulo">Testimonios de nuestros clientes</h1>

      <div
        class="testimonios__contenedor__completo"
        id="testimonios__contenedor__completo"
      >
        <div class="testimonios__contenedor order1">
          <div class="testimonios__fotos__nombre">
            <img
              src={fotosTestimonios.foto1}
              alt=""
            ></img>
            <h3>Lorem Name 1</h3>
          </div>
          <div class="testimonio__texto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusamus incidunt suscipit, ipsum sequi fugiat dolorem molestiae
              consequatur adipisci beatae non eaque nihil officia nisi officiis
              sapiente ex similique. Soluta?
            </p>
          </div>
        </div>

        <div class="testimonios__contenedor order2">
          <div class="testimonios__fotos__nombre">
            <img
              src={fotosTestimonios.foto2}
              alt=""
            ></img>
            <h3>Lorem Name 2</h3>
          </div>
          <div class="testimonio__texto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusamus incidunt suscipit, ipsum sequi fugiat dolorem molestiae
              consequatur adipisci beatae non eaque nihil officia nisi officiis
              sapiente ex similique. Soluta?
            </p>
          </div>
        </div>

        <div class="testimonios__contenedor order3">
          <div class="testimonios__fotos__nombre">
            <img
              src={fotosTestimonios.foto3}
              alt=""
            ></img>
            <h3>Lorem Name 3</h3>
          </div>
          <div class="testimonio__texto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              accusamus incidunt suscipit, ipsum sequi fugiat dolorem molestiae
              consequatur adipisci beatae non eaque nihil officia nisi officiis
              sapiente ex similique. Soluta?
            </p>
          </div>
        </div>
      </div>

      <div class="testimonios__botones">
        <p
          class="boton_izquierda"
          id="boton__izquierda"
          onClick={cambioOrdenIzquierda}
        >
          {" "}
          {"<"}{" "}
        </p>
        <p
          class="boton_derecha"
          id="boton__derecha"
          onClick={cambioOrdenDerecha}
        >
          {" "}
          {">"}{" "}
        </p>
      </div>
    </div>

    //   </div>
  );
};

export default Testimonios;
