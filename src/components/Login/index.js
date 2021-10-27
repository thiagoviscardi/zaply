import React, {useState} from "react";
import {Link} from 'react-router-dom'
function Cadastro(){

    const [cadastraEmail, setCadastraEmail]= useState("")
    const [cadastraPassword, setCadastraPassword] = useState("")

    return(
        <>
            <h1>Cadastro</h1>

            <input
            type="email"
            placeholder="Digite um e-mail"
            value={cadastraEmail}
            onChange={e=>setCadastraEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="Digite uma senha"
            value={cadastraPassword}
            onChange={e=>setCadastraPassword(e.target.value)}
            />

            <button type="submit">
                <Link to={{pathname:"/login", state:{dataLogin:{emailCadastrado:cadastraEmail, passwordCadastrado:cadastraPassword}}}} >CADASTRO</Link>
            </button>
        </>
    )
}

export default Cadastro