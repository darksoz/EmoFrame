function PomsExample() {
    return (
        <>

            <h1 class="likert-leap-header mt-2">BRUMS</h1>
            <p class="lead ml-5 p-3"> Abaixo está uma lista de palavras que descrevem sentimentos. Por
                favor, leia tudo atenciosamente. Em seguida assinale, em cada linha, o
                quadrado que melhor descreve COMO VOCÊ SE SENTE AGORA. Tenha
                certeza de sua resposta para cada questão, antes de assinalar. Clique no botão abaixo para ver exemplos de preenchimento:
            </p>
            <div class="d-flex flex-column-reverse" id="sample">
                <button class="btn whitebutton btn-lg" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Exemplos
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <form class="form">
                            <label class="statement-leap text-start">Exemplo 1. Estou Confiante.</label>
                            <ul class="likert-leap">
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex1" value="zero" checked />
                                    <label>Nada</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex1" value="one" />
                                    <label>Um Pouco</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex1" value="two" />
                                    <label>Moderadamente</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex1" value="three" />
                                    <label>Bastante</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex1" value="four" />
                                    <label>Extremamente</label>
                                </li>

                                <blockquote class="lead">Nesse caso, a pessoa considerou que não se sentiu nada confiante durante
                                    a última semana, pois marcou a opção "nada" em relaçao a palavra "confiante".</blockquote>
                            </ul>

                            <label class="statement-leap text-start">Exemplo 2. Estou Confiante.</label>
                            <ul class="likert-leap">
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex2" value="zero" />
                                    <label>Nada</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex2" value="one" />
                                    <label>Um Pouco</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex2" value="two" checked />
                                    <label>Moderadamente</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex2" value="three" />
                                    <label>Bastante</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex2" value="four" />
                                    <label>Extremamente</label>
                                </li>

                                <blockquote class="lead">Neste segundo exemplo, a pessoa apresentou uma resposta neutra sobre o
                                    quão confiante tem se sentido durante a última semana, pois selecionou uma opção igualmente distante de “Nada” ou “Extremamente”.</blockquote>

                            </ul>

                            <label class="statement-leap text-start">Exemplo 3. Estou Confiante.</label>
                            <ul class="likert-leap">
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex3" value="zero" />
                                    <label>Nada</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex3" value="one" />
                                    <label>Um Pouco</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex3" value="two" />
                                    <label>Moderadamente</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex3" value="three" />
                                    <label>Bastante</label>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-pomsex3" value="four" checked />
                                    <label>Extremamente</label>
                                </li>

                                <blockquote class="lead">Já nesse caso, a pessoa considerou que se sentiu Extremamente confiante,
                                    uma vez que marcou a opção "Extremamente" em relação a palavra confiante.</blockquote>

                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}
export default PomsExample;