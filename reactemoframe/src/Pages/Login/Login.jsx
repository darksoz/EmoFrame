import { useHistory } from "react-router";
import './Login.css';
import axios from 'axios';
import { useState } from "react";

function Login() {
    let history = useHistory();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    function onEmailChange(value){
        setEmail(value)
    }
    function onPasswordChange(value){
        setPassword(value)
    }

    async function test() {
        var data = JSON.stringify({
            "email": `${email}`,
            "password": `${password}`
        });

        var config = {
            method: 'post',
            url: 'http://localhost:5000/api/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log("Error aqui", error);
            });
    }

    return (
        <div class="flex-fill">
            <div class="wrapper fadeInDown">
                <div id="formContent" >
                    <div class="fadeIn first m-4">
                        <span class="far fa-user fa-2x" />
                    </div>
                    <input type="text" id="email" class="fadeIn second" name="login" placeholder="E-mail" required onChange={e => onEmailChange(e.target.value)}/>
                    <input type="password" id="password" class="fadeIn third" name="login" placeholder="Senha" required onChange={e => onPasswordChange(e.target.value)}/>
                    <input type="submit" class="fadeIn fourth" value="Entrar" onClick={async () => await test()} />
                </div>
            </div>

        </div>
    )
}

export default Login;