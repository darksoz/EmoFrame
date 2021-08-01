import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.css';

function Home() {

    const history = useHistory();

    function goToLogin(path){
        history.push(path);
    }
    return (
        <div>
            <div class="container" >
                <div class="CenterContent">
                    <img src={`${process.env.PUBLIC_URL}/emoframe.png`} style={{width: "250px"}} alt="Responsive image"/>
                    <p className="EmoFrameText">Framework de Instrumentos de Avaliação de Respostas Emocionais</p> 
                    <button class="btn whitebutton  btn-lg" onClick={()=>goToLogin('login')}>Entrar</button>
                    <button class="btn whitebutton btn-lg">Cadastrar</button>
                </div> 
            </div>
        </div>
    )
}

export default Home;