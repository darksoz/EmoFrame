function WhoqolExample() {
    return (
        <>
            <h1 class="likert-leap-header mt-2">WHOQOL</h1>
            <p class="lead ml-5 p-3">
                Este questionário é sobre como você se sente a respeito de sua qualidade de vida, saúde e outras áreas de sua vida.
                Por favor, responda a todas as questões . Se você não tem certeza sobre que resposta dar em uma questão, por favor, escolha entre as alternativas a que lhe parece mais apropriada. Esta, muitas vezes, poderá ser sua primeira escolha.
                Por favor, tenha em mente seus valores, aspirações, prazeres e preocupações. Nós estamos perguntando o que você acha de sua vida, tomando como referência as duas últimas semanas. Clique no botão abaixo para ver exemplos de preenchimento:
            </p>
            <div class="d-flex flex-column-reverse" id="sample">
                <button class="btn whitebutton btn-lg" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Exemplos
                </button>
            </div>
            <p class="lead ml-5 p-3">
                Por favor, leia cada questão, veja o que você acha e selecione a opção que lhe parece a melhor resposta.
            </p>

            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <form class="form">
                        <p class="lead">Por exemplo, pensando nas últimas duas semanas, uma questão poderia ser:</p>
                        <label class="statement-leap text-start">Você recebe dos outros o apoio de que necessita?</label>
                        <ul class="likert-leap">
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="1" />
                                <p>Nada</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="2" />
                                <p>Muito pouco</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="3" />
                                <p>Médio</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="4" />
                                <p>Muito</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="5" />
                                <p>Completamente</p>
                            </li>

                        </ul>
                        <blockquote class="lead mt-1">Você deve selecionar a opção que melhor corresponde ao quanto você recebe dos outros o apoio de que necessita nestas últimas duas semanas. Portanto, você deve selecionar a opção "muito" se você recebeu "muito" apoio como abaixo.</blockquote>


                        <label class="statement-leap text-start">Você recebe dos outros o apoio de que necessita?</label>
                        <ul class="likert-leap">
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="1" />
                                <p>Nada</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="2" />
                                <p>Muito pouco</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="3" />
                                <p>Médio</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="4" checked />
                                <p>Muito</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="5" />
                                <p>Completamente</p>
                            </li>

                        </ul>

                        <blockquote class="lead mt-1">Você deve selecionar a opção "nada" se você não recebeu "nada" de apoio.</blockquote>


                        <label class="statement-leap text-start">Você recebe dos outros o apoio de que necessita?</label>
                        <ul class="likert-leap">
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="1" checked/>
                                <p>Nada</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="2" />
                                <p>Muito pouco</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="3" />
                                <p>Médio</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="4"  />
                                <p>Muito</p>
                            </li>
                            <li>
                                <input class="form-check-input" type="radio" name="likert-leapex1" value="5" />
                                <p>Completamente</p>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
        </>
    );

}
export default WhoqolExample;
