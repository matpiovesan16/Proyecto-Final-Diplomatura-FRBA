import React, {useState} from "react";
import "../styles/components/pages/formulario.css"
import axios from "axios";
import classNames from "classnames";

const Formulario = (props) => {
const initialForm = {
  nombre:'',
  email:'',
  telefono:'',
  mensaje:''
}


const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormaData] = useState(initialForm);

const hanleChange = e =>{
  const {name, value} = e.target;
  setFormaData(oldData =>({
    ...oldData,
    [name]:value
  }))
}

const  hanleSubmit = async e =>{
  e.preventDefault();
  setMsg('');
  setSending(true)
  const response = await axios.post('http://localhost:3000/api/contacto',formData);
  setSending(false);
  setMsg(response.data.message);
  if(response.data.error === false){
    setFormaData(initialForm)
  }

}









  return (
    <div className="contenedor">
      <form className="formulario" action="/contacto" method="post" onSubmit={hanleSubmit}>
        <h1 className="formulario__titulo">Turnos</h1>
        <input type="text" className='formulario__input' name='nombre' onChange={hanleChange} value={formData.nombre}/>
        <label for="" className={classNames(`formulario__label fijar`)}>
          Nombre
        </label>

        <input type="email" className="formulario__input 2"  name='email' onChange={hanleChange} value={formData.email}  required/>
        <label for="" className={classNames(`formulario__label fijar`)}>
          Email
        </label>

        <input type="number" className="formulario__input 2"  name='telefono' onChange={hanleChange} value={formData.telefono} required />
        <label for="" className={classNames(`formulario__label fijar`)}>
          Telefono
        </label>




        <input type="text" className="formulario__input 3" name='mensaje' onChange={hanleChange} value={formData.mensaje}/>

        <label for="" className={classNames(`formulario__label fijar`)}>
          Mensaje
        </label>

        <div className="container__btn">
        <input type="submit" className="formulario__submit" value="Enviar" />
        <input type="reset" className="formulario__submit" value="Borrar" />
        </div>
        {sending ? <p className="mensajeEnviado">Enviando...</p> : null}
        {msg ? <p className="mensajeEnviado">{msg}</p> : null}

    
      </form>
    </div>
  );
};

export default Formulario;
