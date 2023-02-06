import React from "react";
import fotoNosotros from '../assets/img/fotosEnzo/1-26.jpg'
import "../styles/components/pages/nosotros.css"

const Nosotros = (props) => {
  return (
    <div className="nosotros">
      <h1 className="nosotros__titulo"> Sobre <span> BlackFish </span> Tattoo
      </h1>
      <div className="nosotros__contenedor">
        <img src={fotoNosotros} alt=""></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, autem
          excepturi? Ratione neque recusandae exercitationem facere enim,
          dignissimos incidunt accusamus ab maxime cupiditate, saepe aut esse
          iure iste! Vel, voluptate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam, autem excepturi? Ratione neque recusandae
          exercitationem facere enim, dignissimos incidunt accusamus ab maxime
          cupiditate, saepe aut esse iure iste! Vel, voluptate. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quam, autem excepturi?
          Ratione neque recusandae exercitationem facere enim, dignissimos
          incidunt accusamus ab maxime cupiditate, saepe aut esse iure iste!
          Vel, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quam, autem excepturi? Ratione neque recusandae exercitationem
          facere enim, dignissimos incidunt accusamus ab maxime cupiditate,
          saepe aut esse iure iste! Vel, voluptate.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
