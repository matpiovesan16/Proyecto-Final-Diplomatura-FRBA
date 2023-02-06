import React from "react";
import '../styles/components/pages/dondeEstamos.css'

const DondeEstamos = (props) => {
    return(
        <div className="donde__estamos">
        <h1 className="donde__estamos__titulo">¿Donde estamos?</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14243.717553205186!2d-65.1395848!3d-26.8103769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x82f2b1ec21e2f5fd!2sBlackfish%2022!5e0!3m2!1ses-419!2sar!4v1667519070064!5m2!1ses-419!2sar" 
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100">
        </iframe>
        <div className="donde__estamos__informacion">
        <h4>Direccion:</h4>
        <p>Avenida siempre viva 743</p>
        <h4>Colectivos:</h4>
        <p>Linea 124</p>
        <p>Linea 122</p>
        </div>
    
      </div>
    );
}

export default DondeEstamos;