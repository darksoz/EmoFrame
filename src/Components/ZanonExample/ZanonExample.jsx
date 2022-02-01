import Container from 'react-bootstrap/Container';
import '../../Pages/Zanon/Zanon.css';

function ZanonExample () {
    return (
        <>
        <Container>
        <div class="wrap">
                    <h1 class="likert-zanon-header mt-2">Escala de Afetos de Zanon</h1>
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
                            <div class="card card-body form">
                                <form>
                                    <label class="statement-leap text-start">Exemplo 1. Estou Confiante.</label>
                                    <ul class="likert-zanon">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex1" value="1" checked />
                                            <p> Não tem nada a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex1" value="2" />
                                            <p> Tem pouco a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex1" value="3" />
                                            <p> Ás vezes tem e às vezes não tem a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex1" value="4" />
                                            <p> Tem muito a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex1" value="5" />
                                            <p> Tem tudo a ver comigo</p>
                                        </li>

                                        <blockquote class="lead">Nesse caso, a pessoa considerou que a intensidade de confiança que sentiu durante o preenchimento da lista foi muito fraca, pois marcou a opção "1" em relaçao a frase "Estou confiante".</blockquote>



                                    </ul>


                                    <label class="statement-leap text-start">Exemplo 2. Estou Confiante.</label>
                                    <ul class="likert-zanon">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex2" value="1" />
                                            <p> Não tem nada a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex2" value="2" />
                                            <p> Tem pouco a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex2" value="3" checked />
                                            <p> Ás vezes tem e às vezes não tem a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex2" value="4" />
                                            <p> Tem muito a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex2" value="5" />
                                            <p> Tem tudo a ver comigo</p>
                                        </li>

                                        <blockquote class="lead">Neste segundo exemplo, a pessoa apresentou uma resposta neutra (Ás vezes tem e às vezes não tem a ver comigo) sobre a intensidade de confiança que sentiu dutante o período estipulado, pois selecionou uma opção igualmente distante de “Muito fraco” ou “Muito forte”.</blockquote>



                                    </ul>



                                    <label class="statement-leap text-start">Exemplo 3. Estou Confiante.</label>
                                    <ul class="likert-zanon">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex3" value="1" />
                                            <p> Não tem nada a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex3" value="2" />
                                            <p> Tem pouco a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex3" value="3" />
                                            <p> Ás vezes tem e às vezes não tem a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex3" value="4" />
                                            <p> Tem muito a ver comigo</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-zanonex3" value="5" checked />
                                            <p> Tem tudo a ver comigo</p>
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

                    

                </div>




            
        </Container>
        </>

    );

}
export default ZanonExample;