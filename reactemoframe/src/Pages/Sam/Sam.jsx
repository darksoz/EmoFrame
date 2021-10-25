import React from 'react';
import './Sam.css';

function Sam() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col md-2">
                        <div class="wrap">
                            <h1 class="likert-header">SAM</h1>
                            <p class="lead ml-5 p-3"> Nesta tarefa, você será solicitado a avaliar suas emoções em três escalas
                                distintas. Veja o que cada escala representa clicando no botão de instruções abaixo:
                            </p>
                            <div class="d-flex flex-column-reverse">
                                <button class="btn whitebutton btn-lg" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Instruções
                                </button>

                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body">
                                        <form>
                                            <blockquote>
                                                <h3> Satisfação:</h3>

                                                <p class="lead ml-5 p-3">
                                                    Avalie o quão positiva ou negativa é a emoção que você sente, variando de
                                                    sentimentos desagradáveis a sentimentos agradáveis de felicidade.
                                                </p>
                                            </blockquote>

                                            <ul class='likert'>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="zero" />
                                                    <img src={`${process.env.PUBLIC_URL}/Like.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="one" aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="two" />
                                                    <img src={`${process.env.PUBLIC_URL}/Sorriso.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="three" aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="four" />
                                                    <img src={`${process.env.PUBLIC_URL}/Neutro.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="five" aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="six" />
                                                    <img src={`${process.env.PUBLIC_URL}/Triste.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="seven" aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertex1"
                                                        id="inlineRadio2" value="eight" />
                                                    <img src={`${process.env.PUBLIC_URL}/Deslike.png`} width="80px" alt=""/>
                                                </li>
                                            </ul>
                                        </form>
                                        <form>
                                            <blockquote>
                                                <h3> Motivação:</h3>

                                                <p class="lead ml-5 p-3">
                                                    Avalie o quão motivado ou apático (desmotivado) que sente, em uma variação
                                                    de excitação frenética a sonolência ou tédio. </p>
                                            </blockquote>
                                            <ul class='likert'>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="zero"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Criativo.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="two"
                                                        aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="three"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Radiante.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="four"
                                                        aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="five"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Neutro.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="six"
                                                        aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="seven"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Entediado.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="height"
                                                        aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="nine"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Sono.png`} width="80px" alt=""/>
                                                </li>
                                            </ul>
                                        </form>

                                        <form>
                                            <blockquote>
                                                <h3>Sentimento de Controle</h3>
                                                <p class="lead ml-5 p-3">
                                                    Avalie até que ponto sua emoção o faz sentir que está no controle da
                                                    situação, variando de não estar no controle a estar totalmente no controle.
                                                </p>
                                            </blockquote>
                                            <ul class='likert'>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="zero"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Frustrado.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="two"
                                                        aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="three"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Confuso.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="four"
                                                        aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="five"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Neutro.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="six"
                                                        aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="seven"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Sorriso.png`} width="80px" alt=""/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="eight"
                                                        aria-label="..."/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likertsam2" value="nine"/>
                                                    <img src={`${process.env.PUBLIC_URL}/Inteligente.png`} width="80px" alt=""/>
                                                </li>
                                            </ul>
                                        </form>


                                    </div>
                                </div>




                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sam;