import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { DeleteButton } from './style';

export default function Delete(props) {
  const history = useHistory();
    const {id} = props;
    
function productsDelete(props){   
     axios.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
     .then((res=>{
      history.push('/list');
      window.location.reload();
        
     }))
}
  return (
  <div>
    <DeleteButton onClick={productsDelete}>Deleta Produto</DeleteButton>
  </div>
    );
}
