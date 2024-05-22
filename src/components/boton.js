import React from "react";
import B from './image/boton.jpg'
import "./style/Card.css"
import { Link } from "react-router-dom";

const Boton=()=>(
    <Link to="/ruta2">
    <img className="boton" src={B} alt="Botón" style={{ width: '62px', height: '50px' }} />
</Link>

)

export default Boton
    
    
