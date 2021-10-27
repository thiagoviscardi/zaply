import React, { useEffect, useState }  from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Input, Label, Button} from './style.js';
import zaplyImg from '../../images/tecnologiaZaply3.jpg';
import { useToasts } from 'react-toast-notifications';


export default function Info(props) {
  const { addToast } = useToasts();
  const [previousId, setPreviousId] = useState();
 
  const history = useHistory();
  const [data, setData] = useState({
    name:"",
    type:""
  });

  function handle(e){
    setPreviousId(props.location.state.idEdit.idEditar);
    const newData={...data}
    newData[e.target.name] = e.target.value;
    setData(newData);
  }


const edit = async () => {  
  if(!previousId) {
    addToast('Digite algo no campo para editar', {
    appearance: 'warning',
  });
  return;
  }
console.log(previousId, 'previousIdpreviousIdpreviousIdpreviousId')
  const response = await axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${previousId}`,
  {name:data.name, type:data.type})
  .then((res=>{
   history.push('/list');
   window.location.reload();
  }))
}

  return (
  <div style={{backgroundImage: "url(" + zaplyImg + ")",
  backgroundPosition: 'center',
  height: '590px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
    <h1>Editar</h1>
    <form onSubmit={(e)=>edit(previousId)}>
      <Label for="name">Nome:</Label>
      <Input onChange={(e)=>handle(e)} value={data.name} id="name" name="name" type ="text" />
      <Label for="type">Nova url de imagem:</Label>
      <Input onChange={(e)=>handle(e)} value={data.type} id="type" name="type" type ="text" />
    </form>
    <Button onClick={edit}>EDITE SEU PRODUTO</Button>
  </div>
    );
}
