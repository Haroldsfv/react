import React from "react";
import Card from "../Card";
import Hola from "../Saludo";
import goku from "../image/goku2.jpg"
import Iteracion from "../Itinerante"
import Addb from "../boton";

export default class Maestro extends React.Component{
    state = {
            data:[{
                "id":1,
                "nombre":"Goku",
                "descripcion":"Super Saiyajin 2",
                "img":goku,
                "color":"salmon"
            },
            {
                "id": 2,
                "nombre": "Vegeta",
                "descripcion": "Super Saiyajin Dios",
                "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCtF7nLI_CwwRwRs1Cj7gfJIueWWPcSwRGyK8SBkr&s',
                "color":"green"
              },
              {
                "id": 3,
                "nombre": "Piccolo",
                "descripcion": "Guerrero Namekiano",
                "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprL4mhF0sanQGFHPxnvzTOT-sojuVjr5AEO434Q7wqA&s',
                "color":"red"
              },
              {
                "id": 4,
                "nombre": "Gohan",
                "descripcion": "Definitivo",
                "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BVVwYw93Ol87flAEgTuSKfe0EUO1i0O9dS710q9jIg&s',
                "color":"yellow"
              },
              {
                "id": 5,
                "nombre": "Frezzer",
                "descripcion": "Gold",
                "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOjKnISGnhrj12pyvGcr6eFFlS00EslWcKoJZBJsugA&s',
                "color":"purple"
              }]   
        }
render(){
    return(
        <div>
            <Hola
             username=" Harold"
            />
            <Iteracion
             chao={this.state.data}
            />
            <Addb/>
        </div>
    )
}

}