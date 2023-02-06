import React from "react";
import '../../styles/components/precios/promociones.css'
const PromocionesItems = (props) =>{
    const {name, price, img, body} = props;
    return(
        <div className="precios">
            <div className="contenedor-trabajos">
            <div className="contenedor-info">
            <h3>{name}</h3>
            <h3>$ {price}</h3>
            </div>
            <img src={img} alt="" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: body}} />
        </div>
    )
}

export default PromocionesItems;