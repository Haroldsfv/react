import React from "react";

export default class Segunda extends React.Component{
state={}
handleSummit=e=>{
  e.preventDefault()
  console.log(this.state)
}
handleChange=e=>{
  this.setState({[e.target.name]:e.target.value})
}

render (){
  return(
    <div>
      <form onSubmit={this.handleSummit}>
        <input
          className="Nombre"
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={this.handleChange}
          value={this.state.nombre}
        />
        <br></br>
        <br></br>
        <input
        className="Descripción"
        type="text"
        placeholder="Descripción"
        name="descripción"
        onChange={this.handleChange}
        value={this.state.descripcion}
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

//   handleClick=()=>(
//     console.log("Click")
//    )
//   render (){
//     return(
//       <button onClick={this.handleClick}>
//         click
//       </button>
//     )
//   }
// 