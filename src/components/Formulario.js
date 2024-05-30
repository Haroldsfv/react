import React from "react";

export default class Formulario extends React.Component{
    
    handleSummit=e=>{
      e.preventDefault()
      console.log(this.state)
    }
    render (){
        const{onChange,form}=this.props
      return(
        <div>
          <form onSubmit={this.handleSummit}>
            <input
              className="Nombre"
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={onChange}
              value={form.nombre}
            />
            <br></br>
            <br></br>
            <input
            className="Descripción"
            type="text"
            placeholder="Descripción"
            name="descripción"
            onChange={onChange}
            value={form.descripcion}
            />
            <br></br>
            <button type="submit">
           Enviar formulario
           </button>
          </form>
        </div>
      )
    }
    
    }