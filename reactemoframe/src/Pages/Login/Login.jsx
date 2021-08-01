import { useHistory } from "react-router";
import './Login.css';

function Login(){
    let history = useHistory();


    return(
        <div class="flex-fill">
            <div class="wrapper fadeInDown">
                <div id="formContent" >  
                    <div class="fadeIn first m-4">
                        <span class="far fa-user fa-2x"/>
                    </div>
                    <form>
                        <input type="text" id="email" class="fadeIn second" name="login" placeholder="E-mail" required/>
                        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Senha" required/>
                        <input type="submit" class="fadeIn fourth" value="Entrar"/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;