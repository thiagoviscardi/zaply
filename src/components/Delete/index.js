import axios from 'axios';
import {useHistory} from 'react-router-dom';

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
    <button onClick={productsDelete}>Deleta Produto</button>
  </div>
    );
}
