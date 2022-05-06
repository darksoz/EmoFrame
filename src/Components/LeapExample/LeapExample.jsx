

function LeapExample() {
    return (
        <>
       
            <h1 class="likert-leap-header mt-2">LEAP</h1>
            <p class="lead ml-5 p-3"> Nesta página você encontrará uma lista com frases sobre você e sobre o
                que está sentindo ou pensando neste momento. Sua tarefa é indicar a intensidade de
                sentimento de 1 a 5 para cada uma dessas frases, sendo a 1 (um) a mais fraca e a 5
                (cinco) a mais forte. Não existe resposta certa ou errada. <span class="negrito">Sua primeira reação ao ler a frase é a melhor.</span> Você deve marcar a intensidade que você está sentindo <span class="negrito">no momento</span> do
                preenchimento da lista. Clique no botão abaixo para ver exemplos de preenchimento:
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
                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="1" checked />
                                    <p>1 <br></br>(Muito Fraco)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="2" />
                                    <p>2 <br></br>(Fraco)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="3" />
                                    <p>3 <br></br>(Mais ou Menos)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="4" />
                                    <p>4 <br></br>(Forte)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex1" value="5" />
                                    <p>5 <br></br>(Muito Forte)</p>
                                </li>
                                
                                

                                <blockquote class="lead mt-1">Nesse caso, a pessoa considerou que a intensidade de confiança que sentiu durante o preenchimento da lista foi muito fraca, pois marcou a opção "1" em relaçao a frase "Estou confiante".</blockquote>
                            </ul>


                            <label class="statement-leap text-start">Exemplo 2. Estou Confiante.</label>
                            <ul class="likert-leap">
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="1" />
                                    <p>1 <br></br>(Muito Fraco)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="2" />
                                    <p>2 <br></br>(Fraco)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="3" checked />
                                    <p>3 <br></br>(Mais ou Menos)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="4" />
                                    <p>4 <br></br>(Forte)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex2" value="5" />
                                    <p>5 <br></br>(Muito Forte)</p>
                                </li>
                               

                                <blockquote class="lead mt-1">Neste segundo exemplo, a pessoa apresentou uma resposta neutra (mais ou menos) sobre a intensidade de confiança que sentiu dutante o período estipulado, pois selecionou uma opção igualmente distante de “Muito fraco” ou “Muito forte”.</blockquote>

                            </ul>



                            <label class="statement-leap text-start">Exemplo 3. Estou Confiante.</label>
                            <ul class="likert-leap">
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="1" />
                                    <p>1 <br></br>(Muito Fraco)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="2" />
                                    <p>2 <br></br>(Fraco)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="3" />
                                    <p>3 <br></br>(Mais ou Menos)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="4" />
                                    <p>4 <br></br>(Forte)</p>
                                </li>
                                <li>
                                    <input class="form-check-input" type="radio" name="likert-leapex3" value="5" checked />
                                    <p>5 <br></br>(Muito Forte)</p>
                                </li>
                                

                                <blockquote class="lead mt-1">Já nesse caso, a pessoa considerou que a intensidade de confiança que sentiu durante o preenchimento da lista foi muito forte, uma vez que marcou a opção "5" em relação ao item "Estou confiante".</blockquote>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeapExample;
