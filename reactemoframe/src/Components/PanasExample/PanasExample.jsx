import '../../Pages/Panas/Panas.css';
import Container from 'react-bootstrap/Container';

function PanasExample() {
    return (
        <>
            <Container>
                <div class="wrap">
                    <h1 class="likert-panas-header mt-2">PANAS</h1>
                    <p class="lead ml-5 p-3">
                        Esta escala consiste num conjunto de palavras que descrevem diferentes sentimentos e emoções. Leia cada palavra e marque a resposta adequada a palavra. Veja a escala e exemplos de preenchimento abaixo:
                    </p>

                    <div class="d-flex flex-column-reverse">
                        <button class="btn whitebutton btn-lg" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Exemplos
                        </button>

                        <div class="collapse" id="collapseExample">
                            <div class="card card-body form">
                                <form>

                                    <label class="statement-panas text-start">Exemplo 1. Estou me sentindo CONFIANTE.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex1" value="1" checked />
                                            <p>1 <br></br>Nada ou muito ligeiramente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex1" value="2" />
                                            <p>2 <br></br>Um pouco</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex1" value="3" />
                                            <p>3<br></br>Moderadamente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex1" value="4" />
                                            <p>4 <br></br>Bastante</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex1" value="5" />
                                            <p>5 <br></br>Extremamente</p>
                                        </li>

                                        <blockquote class="lead">Nesse caso, a pessoa considerou que a intensidade de confiança que sentiu durante o preenchimento da lista foi muito fraca, pois marcou a opção <strong>"Nada ou muito ligeiramente"</strong> em relaçao a frase "Estou me sentindo CONFIANTE."</blockquote>
                                    </ul>


                                    <label class="statement-panas text-start">Exemplo 2. Estou me sentindo CONFIANTE.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex2" value="1" />
                                            <p>1 <br></br>Nada ou muito ligeiramente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex2" value="2" />
                                            <p>2 <br></br>Um pouco</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex2" value="3" checked />
                                            <p>3<br></br>Moderadamente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex2" value="4" />
                                            <p>4 <br></br>Bastante</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex2" value="5" />
                                            <p>5 <br></br>Extremamente</p>
                                        </li>
                                        
                                        <blockquote class="lead">Neste segundo exemplo, a pessoa apresentou uma resposta neutra <strong>"Moderadamente"</strong> sobre a intensidade de confiança que sentiu dutante o período estipulado, pois selecionou uma opção igualmente distante de “Nada ou muito ligeiramente” ou “Extremamente”.</blockquote>

                                    </ul>



                                    <label class="statement-panas text-start">Exemplo 3. Estou me sentindo CONFIANTE.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex3" value="1" />
                                            <p>1 <br></br>Nada ou muito ligeiramente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex3" value="2" />
                                            <p>2 <br></br>Um pouco</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex3" value="3" />
                                            <p>3<br></br>Moderadamente</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex3" value="4" />
                                            <p>4 <br></br>Bastante</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-leapex3" value="5" checked />
                                            <p>5 <br></br>Extremamente</p>
                                        </li>
                                      
                                        <blockquote class="lead">Já nesse caso, a pessoa considerou que a intensidade de confiança que sentiu durante o preenchimento da lista foi muito forte, uma vez que marcou a opção <strong>"Extremamente"</strong> em relação ao item "Estou me sentindo CONFIANTE."</blockquote>
                                    </ul>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <hr></hr>
                <blockquote class="lead ml-5 p-3"> Indique em que medida está sentindo cada uma das emoções <strong>AGORA</strong>:</blockquote>
            </Container>
        </>
    );
}
export default PanasExample;