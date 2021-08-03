import { useHistory } from "react-router";
import './Login.css';
import { useState } from 'react';
import axios from "axios";


function Login(){
    let history = useHistory();

    let [nada1, setEmail] = useState('');
    let [nada2, setPassword] = useState('');

    function emailChange(value){
        setEmail(value);
        console.log("email:  ", value);
    }
    
    async function login(){
        
    }

    function passwordChange(value){
        setPassword(value)
        console.log("password:  ", value);
        
    }

    function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      } 

    async function tryLogin(){
        const article = { email: `${nada1}`, password: `${nada2}` };
        const response = await axios.post('http://localhost:5000/api/auth/login', article);
        alert(response);
    }

    return(
        <div class="flex-fill">
            <div class="wrapper fadeInDown">
                <div id="formContent" >  
                    <div class="fadeIn first m-4">
                        <span class="far fa-user fa-2x"/>
                    </div>
                    <form onSubmit={()=>tryLogin()}>
                        <input type="text" id="email" class="fadeIn second" name="email" placeholder="E-mail" required onChange={e => emailChange(e.target.value)}/>
                        <input type="password" id="password" class="fadeIn third" name="password" placeholder="Senha" required onChange={e=>passwordChange(e.target.value)}/>
                        <input type="submit" class="fadeIn fourth" value="Entrar"/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;