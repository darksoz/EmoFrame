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
                    </div>

                </div>

            </div>
        </>
    );
}

export default Sus;