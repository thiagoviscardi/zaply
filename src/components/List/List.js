import React, { useEffect, useState }  from "react";
import axios from 'axios';
import {ProdContainer, Table, Column} from './style.js';
import Delete from '../Delete/index.js';
import Edit from '../Edit/index.js';

export default function List() {
  const [lista, setLista] = useState([]);
  const [busca, setBusca] = useState('');
  console.log(lista, 'lista')
  
    useEffect(()=>{
      axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
          .then((res=>{
                setLista(res.data)
            }))  
  }, [])
// lista
function list(){
  if(lista && lista[0] && lista[0].name){

    const filtredList = lista.filter((lista) => lista.name.startsWith(busca));
    

    return(
      filtredList.map(item=>(
        <div>
          <Table>
            <tr>
              <Column width="40%" bColor="#ccc">Nome:</Column>
              <Column width="20%" bColor="#ccc">Data de cadastro:</Column>
              <Column width="20%" bColor="#ccc">Categoria:</Column>
             
              <Column width="20%" bColor="#ccc">Imagem:</Column>
            </tr>
            <tr>
              <Column width="20%">{item.name}</Column>
              <Column width="20%">{item.createdAt}</Column>
              <Column width="20%">{item.histories}</Column>
              <img style={{width:'100px'}} alt="imagem" src={item.type} />
              <Column width="20%"><Delete id = {item.id}/><Edit id = {item.id} /></Column>
            </tr>
          </Table> 
        </div>
      ))
    )
  }
  return <></>
  
}
  return (
  <ProdContainer>
    <h1>Lista de Produtos</h1>
    <p>*Obs: Como está sendo usada uma API gratuita e aberta ao público, por favor, caso os produtos tenham sido apagados, cadastrar novos na página de cadastro / add.</p>
    <hr />
    <p>Filtre sua pesquisa</p>
    <input type="text" value ={busca} onChange={(ev) => setBusca(ev.target.value)} />
    {list()}

  </ProdContainer>
    );
}
