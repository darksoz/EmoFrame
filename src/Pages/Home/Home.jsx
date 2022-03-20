import React from 'react';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import {isAuthenticated} from '../../services/auth';
import './Home.css';

function Home() {

    const history = useHistory();

    function goToPage(path){
        history.push(path);
    }
    return isAuthenticated() ? <Redirect to='/dashboard'/> : (
        <div>
            <div class="container" >
                <div class="CenterContent">
                    <img src={`${process.env.PUBLIC_URL}/emoframe.png`} style={{width: "250px"}} alt="Responsive"/>
                    <p className="EmoFrameText">Framework de Instrumentos de Avaliação de Respostas Emocionais</p> 
                    
                    <button class="btn whitebutton btn-lg btn-block" onClick={()=>goToPage('login')}>Entrar</button>
                    
                </div> 
                <Footer/>
            </div>
        </div>
        
    )
}

export default Home;