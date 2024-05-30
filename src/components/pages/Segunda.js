import React from "react";
import Formulario from "../Formulario"
import Card from "../Card";

export default class Segunda  extends React.Component{
  state={
    form:{
      nombre:''
      
   
}
  }
  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value}
    })
  }
  render(){
    return(
      <div>
           <Card
           {...this.state.form}
           
           />
      <Formulario
      onChange={this.handleChange}
      form={this.state.form}
      />
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