import '../../Pages/Sam/Sam.css';

function SamExample() {
    <>
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
                            <div class="card card-body form">

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
                                            id="inlineRadio2" value="zero" checked />
                                        <img src={`${process.env.PUBLIC_URL}/Like.png`} width="80px" alt="" />
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="likertex1"
                                            id="inlineRadio2" value="one" aria-label="..." />
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="likertex1"
                                            id="inlineRadio2" value="two" />
                                        <img src={`${process.env.PUBLIC_URL}/Sorriso.png`} width="80px" alt="" />
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="likertex1"
                                            id="inlineRadio2" value="three" aria-label="..." />
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="likertex1"
                                            id="inlineRadio2" value="four" />
                                        <img src={`${process.env.PUBLIC_URL}/Neutro.png`} width="80px" alt="" />
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="likertex1"
                                            id="inlineRadio2" value="five" aria-label="..." />
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="likertex1"
                                            id="inlineRadio2" value="six" />
                                        <img src={`${process.env.PUBLIC_URL}/Triste.png`} width="80px" alt="" />
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="likertex1"
                                            id="inlineRadio2" value="seven" aria-label="..." />
                                    </li>
                                    <li>
                                        <input class="form-check-input" type="radio" name="likertex1"
                                            id="inlineRadio2" value="eight" />
                                        <img src={`${process.env.PUBLIC_URL}/Deslike.png`} width="80px" alt="" />
                                    </li>

                                    <blockquote class="lead">Nesse caso, na escala de satisfação a pessoa avaliou a emoção sentida como positiva.</blockquote>

                                </ul>

                                <form>
                                    <blockquote>
                                        <h3> Motivação:</h3>

                                        <p class="lead ml-5 p-3">
                                            Avalie o quão motivado ou apático (desmotivado) que sente, em uma variação
                                            de excitação frenética a sonolência ou tédio. </p>
                                    </blockquote>
                                    <ul class='likert'>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex2" value="zero" />
                                            <img src={`${process.env.PUBLIC_URL}/Criativo.png`} width="80px" alt="" />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex2" value="two"
                                                aria-label="..." />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex2" value="three" />
                                            <img src={`${process.env.PUBLIC_URL}/Radiante.png`} width="80px" alt="" />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex2" value="four"
                                                aria-label="..." />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertsex2" value="five" checked />
                                            <img src={`${process.env.PUBLIC_URL}/Neutro.png`} width="80px" alt="" />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex2" value="six"
                                                aria-label="..." />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex2" value="seven" />
                                            <img src={`${process.env.PUBLIC_URL}/Entediado.png`} width="80px" alt="" />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex2" value="height"
                                                aria-label="..." />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex2" value="nine" />
                                            <img src={`${process.env.PUBLIC_URL}/Sono.png`} width="80px" alt="" />
                                        </li>
                                        <blockquote class="lead">Nesse caso, na escala de motivação a pessoa avaliou a emoção sentida como "Neutra", ou seja, nem motivado e nem desmotivado.</blockquote>
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
                                            <input class="form-check-input" type="radio" name="likertex3" value="zero" />
                                            <img src={`${process.env.PUBLIC_URL}/Frustrado.png`} width="80px" alt="" />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex3" value="two"
                                                aria-label="..." />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex3" value="three" />
                                            <img src={`${process.env.PUBLIC_URL}/Confuso.png`} width="80px" alt="" />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex3" value="four"
                                                aria-label="..." />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex3" value="five" />
                                            <img src={`${process.env.PUBLIC_URL}/Neutro.png`} width="80px" alt="" />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex3" value="six"
                                                aria-label="..." />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex3" value="seven" />
                                            <img src={`${process.env.PUBLIC_URL}/Sorriso.png`} width="80px" alt="" />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex3" value="eight"
                                                aria-label="..." />
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likertex3" value="nine" checked />
                                            <img src={`${process.env.PUBLIC_URL}/Inteligente.png`} width="80px" alt="" />
                                        </li>

                                        <blockquote class="lead">Nesse caso, na escala de sentimento de controle a pessoa avaliou a emoção sentida como "totalmente no controle".</blockquote>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SamExample;