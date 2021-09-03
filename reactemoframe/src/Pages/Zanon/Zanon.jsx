import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Zanon.css';
function Zanon() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col md-2">
                        <div class="wrap">
                            <h1 class="likert-leap-header mt-2">Escala de Afetos de Zanon</h1>
                            <p class="lead ml-5 p-3"> Nesta página você encontrará uma lista com frases que descrevem sentimentos e emoções
                                passadas e presentes. Sua tarefa é indicar o quanto cada uma delas tem ou não a ver com
                                você em uma escala de 1 a 5, sendo a <span class="negrito">1 (um) quando tiver NADA a ver com você e a 5
                                (cinco) quando tiver TUDO a ver com você.</span> Não existe resposta certa ou errada. <span class="negrito"> Sua primeira reação ao ler a frase é a melhor.</span> Clique no botão abaixo para ver exemplos de preenchimento:
                            </p>
                            <div class="d-flex flex-column-reverse">
                                <button class="btn whitebutton btn-lg" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Exemplos
                                </button>

                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body">
                                        <form>
                                            <label class="statement-leap text-start">Exemplo 1. Estou Confiante.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="1" checked />
                                                    <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="2" />
                                                    <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="3" />
                                                    <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="4" />
                                                    <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="5" />
                                                    <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                                </li>

                                                <blockquote class="lead">Nesse caso, a pessoa considerou que a intensidade de confiança que sentiu durante o preenchimento da lista foi muito fraca, pois marcou a opção "1" em relaçao a frase "Estou confiante".</blockquote>


                                            </ul>


                                            <label class="statement-leap text-start">Exemplo 2. Estou Confiante.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="1" />
                                                    <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="2" />
                                                    <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="3" checked />
                                                    <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="4" />
                                                    <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="5" />
                                                    <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                                </li>

                                                <blockquote class="lead">Neste segundo exemplo, a pessoa apresentou uma resposta neutra (Ás vezes tem e às vezes não tem a ver comigo) sobre a intensidade de confiança que sentiu dutante o período estipulado, pois selecionou uma opção igualmente distante de “Muito fraco” ou “Muito forte”.</blockquote>

                                            </ul>



                                            <label class="statement-leap text-start">Exemplo 3. Estou Confiante.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="1" />
                                                    <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="2" />
                                                    <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="3" />
                                                    <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="4" />
                                                    <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="5" checked />
                                                    <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                                </li>

                                                <blockquote class="lead">Já nesse caso, a pessoa considerou que a intensidade de confiança que sentiu durante o preenchimento da lista foi muito forte, uma vez que marcou a opção "5" em relação ao item "Estou confiante".</blockquote>


                                            </ul>



                                        </form>


                                    </div>
                                </div>




                            </div>

                            <hr></hr>
                            <blockquote class="lead ml-5 p-3">  Marque o quanto cada uma destas frases tem a ver com você, sendo 1 (um) quando
tiver <span class="negrito">NADA </span> a ver com você e 5 (cinco) quando tiver <span class="negrito">TUDO</span> a ver com você </blockquote>

                            <div>
                                <form>
                                    <label class="statement-leap text-start">Muitas vezes, eu fico nervoso(a).</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon1" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon1" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon1" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon1" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon1" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>



                                    <label class="statement-leap text-start">Me sinto confiante no dia a dia.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon2" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon2" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon2" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon2" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon2" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Sou corajoso(a).</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon3" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon3" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon3" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon3" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon3" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Tenho me sentido cansado(a) nos últimos meses.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon4" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon4" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon4" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon4" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon4" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Ando muito preocupado(a) nos últimos tempos.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon5" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon5" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon5" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon5" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon5" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Sou determinado(a) para conseguir o que quero.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon6" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon6" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon6" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon6" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon6" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Me sinto culpado(a) por coisas que fiz no passado.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon7" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon7" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon7" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon7" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon7" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Sou apaixonado(a) por algumas coisas que faço.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon8" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon8" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon8" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon8" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon8" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Muitas situações me deixaram alegre nos últimos tempos.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon9" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon9" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon9" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon9" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon9" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Fico zangado(a) quando sou contrariado(a).</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon10" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon10" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon10" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon10" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon10" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">As pessoas dizem que sou mal-humorado(a).</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon11" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon11" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon11" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon11" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon11" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Ultimamente ocorreram situações em que senti muita
raiva de algumas pessoas.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon12" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon12" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon12" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon12" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon12" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Em geral eu me sinto forte para superar as dificuldades
da vida.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon13" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon13" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon13" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon13" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon13" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Me dá prazer experimentar coisas novas.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon14" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon14" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon14" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon14" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon14" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Sinto orgulho de mim mesmo(a).</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon15" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon15" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon15" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon15" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon15" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Eu me irrito facilmente.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon16" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon16" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon16" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon16" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon16" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Sou valente quando estou diante de um desafio.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon17" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon17" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon17" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon17" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon17" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Nos últimos tempos ocorreram situações em que me
senti humilhado(a).</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon18" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon18" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon18" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon18" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon18" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>

                                    <label class="statement-leap text-start">Tenho me sentido triste ultimamente.</label>
                                    <ul class="likert-leap">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon19" value="1" />
                                            <p data-tip="Não tem nada a ver comigo">1 </p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon19" value="2" />
                                            <p data-tip="Tem pouco a ver comigo">2</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon19" value="3" />
                                            <p data-tip="Ás vezes tem e às vezes não tem a ver comigo">3</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon19" value="4" />
                                            <p data-tip="Tem muito a ver comigo">4</p> <ReactTooltip/>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanon19" value="5" />
                                            <p data-tip="Tem tudo a ver comigo">5</p> <ReactTooltip/>
                                        </li>

                                    </ul>



                                </form>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Zanon;