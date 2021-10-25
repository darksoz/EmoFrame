import './Panas.css';

function Panas() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col md-2">
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
                                    <div class="card card-body">
                                        <form>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <hr></hr>
                <blockquote class="lead ml-5 p-3"> Indique em que medida está sentindo cada uma das emoções <strong>AGORA</strong>:</blockquote>

                <div>
                    <form>
                    <label class="statement-panas text-start">Estou me sentindo INTERESSADO.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas1" value="1" />
                                             <p>1 <br></br>(Nada ou muito ligeiramente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas1" value="2" />
                                             <p>2 <br></br>(Um pouco)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas1" value="3" />
                                             <p>3 <br></br>(Moderadamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas1" value="4" />
                                             <p>4 <br></br>(Bastante)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas1" value="5" />
                                             <p>5 <br></br>(Extremamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas1" value="99" />
                                             <p>Não quero<br></br>responder</p>
                                        </li>

                                    </ul>

                                  

                                    <label class="statement-panas text-start">Estou me sentindo PERTURBADO.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas2" value="1" />
                                             <p>1 <br></br>(Nada ou muito ligeiramente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas2" value="2" />
                                             <p>2 <br></br>(Um pouco)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas2" value="3" />
                                             <p>3 <br></br>(Moderadamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas2" value="4" />
                                             <p>4 <br></br>(Bastante)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas2" value="5" />
                                             <p>5 <br></br>(Extremamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas2" value="99" />
                                             <p>Não quero<br></br>responder</p>
                                        </li>

                                    </ul>

                                    <label class="statement-panas text-start">Estou me sentindo EXCITADO.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas3" value="1" />
                                             <p>1 <br></br>(Nada ou muito ligeiramente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas3" value="2" />
                                             <p>2 <br></br>(Um pouco)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas3" value="3" />
                                             <p>3 <br></br>(Moderadamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas3" value="4" />
                                             <p>4 <br></br>(Bastante)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas3" value="5" />
                                             <p>5 <br></br>(Extremamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas3" value="99" />
                                             <p>Não quero<br></br>responder</p>
                                        </li>

                                    </ul>

                                    <label class="statement-panas text-start">Estou me sentindo ATORMENTADO.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas4" value="1" />
                                             <p>1 <br></br>(Nada ou muito ligeiramente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas4" value="2" />
                                             <p>2 <br></br>(Um pouco)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas4" value="3" />
                                             <p>3 <br></br>(Moderadamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas4" value="4" />
                                             <p>4 <br></br>(Bastante)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas4" value="5" />
                                             <p>5 <br></br>(Extremamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas4" value="99" />
                                             <p>Não quero<br></br>responder</p>
                                        </li>

                                    </ul>

                                    <label class="statement-panas text-start">Estou me sentindo AGRADAVELMENTE.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas5" value="1" />
                                             <p>1 <br></br>(Nada ou muito ligeiramente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas5" value="2" />
                                             <p>2 <br></br>(Um pouco)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas5" value="3" />
                                             <p>3 <br></br>(Moderadamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas5" value="4" />
                                             <p>4 <br></br>(Bastante)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas5" value="5" />
                                             <p>5 <br></br>(Extremamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas5" value="99" />
                                             <p>Não quero<br></br>responder</p>
                                        </li>

                                    </ul>

                                    <label class="statement-panas text-start">Estou me sentindo CULPADO.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas6" value="1" />
                                             <p>1 <br></br>(Nada ou muito ligeiramente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas6" value="2" />
                                             <p>2 <br></br>(Um pouco)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas6" value="3" />
                                             <p>3 <br></br>(Moderadamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas6" value="4" />
                                             <p>4 <br></br>(Bastante)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas6" value="5" />
                                             <p>5 <br></br>(Extremamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas6" value="99" />
                                             <p>Não quero<br></br>responder</p>
                                        </li>

                                    </ul>

                                    <label class="statement-panas text-start">Estou me sentindo ASSUSTADO.</label>
                                    <ul class="likert-panas">
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas7" value="1" />
                                             <p>1 <br></br>(Nada ou muito ligeiramente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas7" value="2" />
                                             <p>2 <br></br>(Um pouco)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas7" value="3" />
                                             <p>3 <br></br>(Moderadamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas7" value="4" />
                                             <p>4 <br></br>(Bastante)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas7" value="5" />
                                             <p>5 <br></br>(Extremamente)</p>
                                        </li>
                                        <li>
                                            <input class="form-check-input" type="radio" name="likert-panas7" value="99" />
                                             <p>Não quero<br></br>responder</p>
                                        </li>

                                    </ul>

                                    <button class="btn-lg whitebutton">Salvar</button>
                    </form>
                </div>

            </div>
        </>
    );
}

export default Panas;