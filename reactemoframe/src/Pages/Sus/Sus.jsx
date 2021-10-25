import React from 'react';
import './Sus.css';

function Sus(){
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col md-2">
                        <div class="wrap">
                            <h1>SUS</h1>
                            <blockquote class="blockquote">
                                <p class="lead ml-5 p-3 text-start"> Para cada uma das seguintes afirmações, selecione a opção que melhor descreve suas reações ao <input id="name" type="text" placeholder="Nome da solução" name="sol" required/> hoje.   
                                <button class="btn whitebutton btn-md ml-3">Salvar</button>
                                <br></br>
                                
                                </p>

                                <p>Clique no botão abaixo para ver exemplos de preenchimento:</p>

                            </blockquote>

                            <div class="d-flex flex-column-reverse">
                                <button class="btn whitebutton btn-lg" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Exemplos
                                </button>

                            </div>

                        </div>

                        <blockquote>
                            <p class="lead ml-5 p-3">
                            Nós temos cinco pontos de uma escala que varia de "Concordo Fortemente" a "Discordo Fortemente", eu gostaria que você me dissesse a resposta que melhor descreve a sua reação para cada uma das afirmações abaixo. 
                            </p>
                        </blockquote>

                        <div>
                            <form>
                            <label class="statement-sus text-start">1. Eu achei fácil inserir dados neste aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus1" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus1" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus1" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus1" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus1" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus1" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                        
                                        
                                </ul>

                                <label class="statement-sus text-start">2. Quando eu cometo um erro é fácil de corrigi-lo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus2" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus2" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus2" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus2" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus2" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus2" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">3. As mensagens de erro ajudam a corrigir os problemas.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus3" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus3" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus3" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus3" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus3" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus3" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">4. Eu me senti no comando usando este aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus4" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus4" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus4" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus4" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus4" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus4" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">5. Eu achei adequado o tempo que levei para completar as tarefas.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus5" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus5" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus5" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus5" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus5" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus5" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">6. Foi fácil de aprender a usar este aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus6" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus6" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus6" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus6" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus6" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus6" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">7. É fácil fazer o que eu quero usando este aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus7" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus7" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus7" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus7" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus7" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus7" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">8. Foi fácil navegar nos menus e telas do aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus8" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus8" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus8" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus8" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus8" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus8" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">9. O aplicativo atende às minhas necessidades.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus9" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus9" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus9" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus9" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus9" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus9" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                               <label class="statement-sus text-start">10. Eu recomendaria este aplicativo para outras pessoas.</label>
                               <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus10" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus10" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus10" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus10" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus10" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus10" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">11. Eu achei o aplicativo consistente. Por exemplo, todas as funções podem ser realizadas de uma maneira semelhante.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus11" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus11" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus11" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus11" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus11" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus11" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">12. É fácil lembrar como fazer as coisas neste aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus12" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus12" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus12" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus12" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus12" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus12" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">13. Eu usaria este aplicativo com frequência.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus13" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus13" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus13" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus13" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus13" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus13" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">14. A organização dos menus e comandos de ação (como botões e links) é lógica, permitindo encontrá-los facilmente na tela.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus14" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus14" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus14" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus14" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus14" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus14" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">15. O design de interface do aplicativo é atraente.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus15" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus15" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus15" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus15" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus15" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus15" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">16. Eu gostei de usar este aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus16" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus16" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus16" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus16" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus16" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">17. O aplicativo fornece todas as informações necessárias para completar as tarefas de forma clara e compreensível.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus17" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus17" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus17" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus17" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus17" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">18. Eu achei o aplicativo muito complicado de usar.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus18" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus18" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus18" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus18" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus18" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus18" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">19. Eu precisei aprender muitas coisas para usar este aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus19" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus19" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus19" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus19" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus19" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus19" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">20. Os símbolos e ícones são claros e intuitivos.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus20" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus20" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus20" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus20" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus20" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus20" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">21. Eu achei os textos fáceis de ler.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus21" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus21" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus21" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus21" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus21" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus21" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">22. Eu achei o aplicativo desnecessariamente complexo. Precisei lembrar, pesquisar ou pensar muito para completar as tarefas.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus22" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus22" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus22" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus22" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus22" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus22" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">23. A terminologia utilizada nos textos dos botões foi fácil de entender.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus23" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus23" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus23" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus23" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus23" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus23" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">24. Eu precisaria de apoio de uma pessoa para usar este aplicativo</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus24" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus24" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus24" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus24" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus24" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus24" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">25. Eu me senti confortável usando este aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus25" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus25" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus25" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus25" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus25" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus25" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                               <label class="statement-sus text-start">26. O aplicativo se comportou como eu esperava.</label>
                               <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus26" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus26" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus26" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus26" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus26" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus26" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">27. Eu achei frustrante usar este aplicativo.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus27" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus27" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus27" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus27" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus27" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus27" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <label class="statement-sus text-start">28. Eu achei que as várias funções do aplicativo são bem integradas.</label>
                                <ul class="likert-sus">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus28" value="1" />
                                             <p>Concordo Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus28" value="2" />
                                             <p>Concordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus28" value="3" />
                                             <p>Neutro</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus28" value="4" />
                                             <p>Discordo Parcialmente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus28" value="5" />
                                             <p>Discordo <br></br>Fortemente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-sus28" value="99" />
                                             <p>Não Quero<br></br>Responder</p>
                                        </li>
                                </ul>

                                <button class="btn whitebutton">Salvar</button>

                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Sus;