import React from 'react';
import './Home.css';

function Home() {
    return (
        <div>
            <div class="container" >
                <div class="CenterContent">
                    <img src={`${process.env.PUBLIC_URL}/emoframe.png`} style={{width: "250px"}} alt="Responsive image"/>
                    <p className="EmoFrameText">Framework de Instrumentos de Avaliação de Respostas Emocionais</p> 
                    <button class="btn whitebutton  btn-lg">Entrar</button>
                    <button class="btn whitebutton btn-lg">Cadastrar</button>
                </div> 
            </div>
        </div>
    )
}

export default Home;