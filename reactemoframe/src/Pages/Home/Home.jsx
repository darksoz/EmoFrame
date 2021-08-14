import React from 'react';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {isAuthenticated} from '../../services/auth';
import './Home.css';

function Home() {

    const history = useHistory();

    function goToLogin(path){
        history.push(path);
    }
    return isAuthenticated() ? <Redirect to='/dashboard'/> : (
        <div>
            <div class="container" >
                <div class="CenterContent">
                    <img src={`${process.env.PUBLIC_URL}/emoframe.png`} style={{width: "250px"}} alt="Responsive"/>
                    <p className="EmoFrameText">Framework de Instrumentos de Avaliação de Respostas Emocionais</p> 
                    <button class="btn whitebutton  btn-lg" onClick={()=>goToLogin('login')}>Entrar</button>
                    <button class="btn whitebutton btn-lg">Cadastrar</button>
                </div> 
            </div>
        </div>
    )
}

export default Home;