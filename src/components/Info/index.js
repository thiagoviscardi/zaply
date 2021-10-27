import React, { useEffect, useState }  from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Input, Label, Submit} from './style.js';
import zaplyImg from '../../images/tecnologiaZaply3.jpg';


export default function Info(props) {
  
  // console.log(props.location.state.idEdit.idEditar, '>>>> id') renderiza em alguma vez e depois nao acha o idEdit. dando erro aqui
  // console.log(props.location.state.idEdit.idEditar);
  const idE = 1;
 
  const history = useHistory();
  const [data, setData] = useState({
    name:"",
    type:""
  });

  function handle(e){
const newData={...data}
newData[e.target.name] = e.target.value;
setData(newData);
  }

 function edit(idE){   
  console.log(idE, 'o que ta aquiiii')
      axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${idE}`, 
      {name:data.name, type:data.type})
      .then((res=>{
         history.push('/home');
      }))
 }
  return (
  <div style={{backgroundImage: "url(" + zaplyImg + ")",
  backgroundPosition: 'center',
  height: '590px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
    <h1>Editar</h1>
    <form onSubmit={(e)=>edit(idE)}>
      <Label for="name">Nome:</Label>
      <Input onChange={(e)=>handle(e)} value={data.name} id="name" name="name" type ="text" />
      <Label for="url">Nova url de imagem:</Label>
      <Input onChange={(e)=>handle(e)} value={data.type} id="url" name="type" type ="text" />
      <Submit type="submit" value="EDITE SEU PRODUTO" />
    </form>
  </div>
    );
}
