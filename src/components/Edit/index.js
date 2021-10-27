import React, { useEffect, useState } from "react";

import {Link} from 'react-router-dom'

export default function Edit(props) {
  const { id } = props;

  return (
    <div>
      <button type="submit">
      <Link to={{pathname:"/info", state:{idEdit:{idEditar:id}}}} >Editar</Link>
      </button>
    </div>
  );
}
