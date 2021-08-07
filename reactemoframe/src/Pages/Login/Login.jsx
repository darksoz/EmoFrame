import './Login.css';
import {useState} from "react";
import {useHistory, Redirect} from 'react-router-dom';
import {LoginAccount} from '../../services/api.js';
import {login, isAuthenticated} from '../../services/auth.js';

function Login() {
    const history = useHistory();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    function onEmailChange(value){
        setEmail(value)
    }
    function onPasswordChange(value){
        setPassword(value)
    }

    async function handleSubmit() {
        var json = JSON.stringify({
            "email": `${email}`,
            "password": `${password}`
        });

        let response = await LoginAccount(json);
        if(response.status === 201){
            console.log("Data aqui ==> ", response.data);
            login(response.data);
            history.push("/dashboard");
        }
        else{
            console.log("Bad request", response.status);
        }
    }
    return  isAuthenticated() ? <Redirect to='/dashboard'/> :
     (
        <div class="flex-fill">
            <div class="wrapper fadeInDown">
                <div id="formContent" >
                    <div class="fadeIn first m-4">
                        <span class="far fa-user fa-2x" />
                    </div>
                    <input type="text" id="email" class="fadeIn second" name="login" placeholder="E-mail" required onChange={e => onEmailChange(e.target.value)}/>
                    <input type="password" id="password" class="fadeIn third" name="login" placeholder="Senha" required onChange={e => onPasswordChange(e.target.value)}/>
                    <input type="submit" class="fadeIn fourth" value="Entrar" onClick={async () => await handleSubmit()} />
                </div>
            </div>

        </div>
    )
}

export default Login;