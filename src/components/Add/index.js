import React, { useEffect, useState }  from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Input, Label, Submit, Button} from './style.js';
import zaplyImg from '../../images/tecnologiaZaply3.jpg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useToasts } from 'react-toast-notifications';

export default function Add(props) {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(null);
  const history = useHistory();
  const [data, setData] = useState({
    name:"",
    type:"",
    histories:"",
  });

  function handle(e){
    const newData={...data}
    newData[e.target.name] = e.target.value;
    setData(newData);
  }


  function add(e){   
    if(!data.name) {
      addToast('Digite pelo menos o nome para cadastrar ', {
      appearance: 'warning',
    });
    return;
    }
    e.preventDefault();
    axios.post(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`, 
    {name:data.name, type:data.type, histories:data.histories})
      .then((res=>{
        history.push('/list');
      }
    )).then(()=>{
        addToast('Item cadastrado com sucesso ', {
        appearance: 'success',
      });
    }
    )
  } 
  

 async function saveAllProducts(e){   
  e.preventDefault();
  const allProducts = [{type:'https://savegnago.vteximg.com.br/arquivos/ids/293238_2', name: 'Borracha Escolar Faber Castell Super Soft', histories:'Bazar E Utilidades', price:'5.39', brand: 'Faber Castell' },
  {type:'https://savegnago.vteximg.com.br/arquivos/ids/296943_2', name: 'Cereal Barra Linea 60g Cookies Cream', histories:'Mercearia', price:'4.99', brand: 'Linea' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/268054_2', name: 'Sobremesa Chandelle 200g Chantilly Caramelo', histories:'Laticíneos', price:'4.99', brand: 'Chandelle' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/285909_2', name: 'Absorvente Always Com 8 Super Protecao Com Abas Suave', histories:'Perfumaria E Beleza', price:'4.19', brand: 'Always' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/448210_2', name: 'Tempero Smart Zero Sadio 48g Frango', histories:'Mercearia', price:'18.38', brand: 'Samrt' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/305299_2', name: 'Amaciante Roupa Baby Soft 5l Toque Cuidado', histories:'Limpeza', price:'13.95', brand: 'Baby Soft' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/270090_2', name: 'Acendedor Alcool Solido Fiat Lux', histories:'Bazar E Utilidades', price:'11.49', brand: 'Fiat Lux' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/291388_2', name: 'Mostarda Kuhne 255g Levemente Picante', histories:'Mercearia', price:'4.99', brand: 'Chandelle' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/276040_2', name: 'Vagem Macarrao Organica Solo Vivo 300g', histories:'Hortifruti', price:'4.99', brand: 'Chandelle' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/278834_2', name: 'Pao De Alho Zinho 300g Picante', histories:'Padaria', price:'4.99', brand: 'Chandelle' },
   {type:'https://savegnago.vteximg.com.br/arquivos/ids/448021_2', name: 'Detergente LÃ­quido Triex 500ml Clear', histories:'Limpeza', price:'4.99', brand: 'Chandelle' }
];

  
    try {
      allProducts.forEach(element => {
        
        axios.post(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`, 
          {name:element.name, type:element.type, histories:element.histories})
            .then(res=>{
              setLoading(1);
            })
      });
      addToast('Itens sendo cadastrados, por favor favor aguarde... ', {
        appearance: 'success',
      });
      setTimeout(() => {
        history.push('/list');
      }, 13000);
      } catch (error) {
        console.log(error);
      }
  }

  return (
  <div style={{backgroundImage: "url(" + zaplyImg + ")",
  backgroundPosition: 'center',
  height: '590px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
    <h1>Adicionar</h1>
    <form onSubmit={(e)=>add(e)}>
      <Label for="name">Nome:</Label>
      <Input onChange={(e)=>handle(e)} value={data.name} id="name" name="name" type ="text" />
      <Label for="category">Categoria:</Label>
      <Input onChange={(e)=>handle(e)} value={data.histories} id="histories" name="histories" type ="text" />
      <Label for="url">Url da foto:</Label>
      <Input onChange={(e)=>handle(e)} value={data.type} id="url" name="type" type ="text" />
      <Submit type="submit" value="CRIE SEU PRODUTO" />
    </form>
    <Button onClick = {saveAllProducts}>Ou cadastre todos de uma só vez.</Button>
  </div>
    );
}
