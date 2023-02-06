import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";
import PromocionesItems from "./PromocionesItems";

const Promociones = (props) => {
  const [loading, setLoading] = useState(false);
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    const cargarPromociones = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/administrador"
      );
      setPromociones(response.data);
      setLoading(false);
    };
    cargarPromociones();
  }, []);

  return (
    <div className="precio">
      <h1>Precios y Promociones</h1>
      <div className="contenedor-precios">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          promociones.map((item) => (
            <PromocionesItems
              key={item.id}
              name={item.nombre}
              price={item.precio}
              img={item.imagen}
              body={item.cuerpo}
            />
          ))
        )}
      </div>
      <button className="btn-turnos"><a href="/formulario">Solicitad tu turno</a></button>
    </div>
  );
};

export default Promociones;
