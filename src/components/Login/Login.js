import React, {useState} from "react";
import { useLocation} from 'react-router-dom'

function Login(props){
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const location = useLocation();

 function logar(){
     if(email === location.state?.dataLogin.emailCadastrado && password === location.state?.dataLogin.passwordCadastrado){

         window.location.replace("/home")
    }
        else{
            alert('Login Incorreto')
        }
     }   
    return(
        <>
            <h1>Login</h1>
            <input
            type="email"
            placeholder="Digite um e-mail"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="Digite uma senha"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <button onClick={logar}>Logar</button>
        </>
    )
}

export default Login