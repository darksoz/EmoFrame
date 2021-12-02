function SusExample() {
    return (
        <>
            <div class="d-flex flex-column-reverse">
                <button class="btn whitebutton btn-lg" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Exemplos
                </button>

                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <form>
                            <label class="statement-sus text-start">Exemplo 1. Eu me senti confiante usando este aplicativo.</label>
                            <ul class="likert-sus">
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex1" value="1" checked />
                                    <p>Concordo Fortemente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex1" value="2" />
                                    <p>Concordo Parcialmente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex1" value="3" />
                                    <p>Neutro</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex1" value="4" />
                                    <p>Discordo Parcialmente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex1" value="5" />
                                    <p>Discordo Fortemente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex1" value="99" />
                                    <p>Não Quero Responder</p>
                                </li>

                                <blockquote class="lead">Nesse caso, a pessoa se sentiu muito confiante usando o aplicativo, pois marcou a opção <strong>"Concordo Fortemente"</strong> em relaçao a frase "Eu me senti confiante usando este aplicativo".</blockquote>


                            </ul>


                            <label class="statement-sus text-start">Exemplo 2. Eu me senti confiante usando este aplicativo.</label>
                            <ul class="likert-sus">
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex2" value="1" />
                                    <p>Concordo Fortemente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex2" value="2" />
                                    <p>Concordo Parcialmente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex2" value="3" checked />
                                    <p>Neutro</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex2" value="4" />
                                    <p>Discordo Parcialmente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex2" value="5" />
                                    <p>Discordo Fortemente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex2" value="99" />
                                    <p>Não Quero Responder</p>
                                </li>

                                <blockquote class="lead">Neste segundo exemplo, a pessoa escolheu a opção <strong>"Neutro"</strong>, ou seja, não concordou e nem discordou da afirmação "Eu me senti confiante usando este aplicativo." </blockquote>

                            </ul>



                            <label class="statement-sus text-start">Exemplo 3. Eu me senti confiante usando este aplicativo.</label>
                            <ul class="likert-sus">
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex3" value="1" />
                                    <p>Concordo Fortemente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex3" value="2" />
                                    <p>Concordo Parcialmente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex3" value="3" />
                                    <p>Neutro</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex3" value="4" />
                                    <p>Discordo Parcialmente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex3" value="5" checked />
                                    <p>Discordo Fortemente</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-susex3" value="99" />
                                    <p>Não Quero Responder</p>
                                </li>

                                <blockquote class="lead">Já nesse caso, a pessoa não se sentiu confiante usando o aplicativo, pois marcou a opção <strong>"Discordo Fortemente"</strong> em relaçao a frase "Eu me senti confiante usando este aplicativo". Além das opções dos exemplos, a escala possui a opção <strong>"Não Quero Responder"</strong> para situações em que o usuário não concorde com nenhuma das opções anteriores ou simplesmente prefira não responder.</blockquote>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SusExample;