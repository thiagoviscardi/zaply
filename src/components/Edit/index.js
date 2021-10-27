import React, { useEffect, useState } from "react";

import {Link} from 'react-router-dom'
import { EditButton } from "./style";

export default function Edit(props) {
  const { id } = props;
  
  return (
    <div>
      <EditButton type="submit">
        <Link style={{textDecoradion:'none', color:'inherit'}} to={{pathname:"/info", state:{idEdit:{idEditar:id}}}} >Editar</Link>
      </EditButton>
    </div>
  );
}
