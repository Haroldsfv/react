import React from "react";
import Card from "./Card";

const Iterador=({chao})=>(
    <div>
        {
            chao.map((chao)=>{
            return(
                    <Card 
                        key={chao.id}
                        nombre = {chao.nombre}
                        descripcion = {chao.descripcion}
                        img = {chao.img}
                        color = {chao.color}
                    />    
                )   
            })
        }   |
    </div>
)
export default Iterador
