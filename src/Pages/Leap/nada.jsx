import React  from 'react';
import { Link } from 'react-scroll';
import { MultiStepForm, Step } from 'react-multi-form';
import './Leap.css';
import LeapExample from '../../Components/LeapExample/LeapExample';

function Leap() {

    const [active, setActive] = React.useState(1);

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col md-2">
                        <div class="wrap">
                            <LeapExample/>
                            <hr></hr>
                            <blockquote class="lead ml-5 p-3">  Marque o quanto vocÃª sente <span class="bold">NESTE MOMENTO</span> de cada um destes sentimentos,
                                sendo 1 (um) uma intensidade muito fraca e 5 (cinco) uma intensidade muito forte. </blockquote>
                            <div>
                                <MultiStepForm activeStep={active} >
                                    <Step label="Passo 1">
                                    <div id="Leap-Page1" class="form">
                                            <label class="statement-leap text-start">Estou aceitando alguma coisa.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap1" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap1" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap1" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap1" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap1" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto uma admiraÃ§Ã£o por alguÃ©m.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap2" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap2" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap2" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap2" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap2" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou alegre.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap3" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap3" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap3" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap3" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap3" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou aliviado(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap4" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap4" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap4" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap4" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap4" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto atraÃ§Ã£o sexual por alguÃ©m.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap5" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap5" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap5" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap5" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap5" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto-me calmo(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap6" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap6" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap6" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap6" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap6" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com calor.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap7" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap7" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap7" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap7" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap7" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou cansado(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap8" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap8" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap8" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap8" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap8" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou cheio(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap9" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap9" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap9" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap9" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap9" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto ciÃºme de alguÃ©m.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap10" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap10" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap10" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap10" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap10" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </Step>
                                    <Step label="Passo 2">
                                    <div id="Leap-Page2" class="form">
                                            <label class="statement-leap text-start">Estou conformado(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap11" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap11" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap11" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap11" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap11" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou tomando cuidado.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap12" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap12" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap12" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap12" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap12" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto-me culpado(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap13" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap13" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap13" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap13" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap13" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto um desejo.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap14" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap14" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap14" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap14" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap14" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com esperanÃ§a.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap15" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap15" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap15" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap15" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap15" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Acho algo estranho.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap16" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap16" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap16" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap16" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap16" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com fome.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap17" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap17" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap17" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap17" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap17" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com frio.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap18" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap18" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap18" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap18" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap18" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou gostando de alguÃ©m.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap19" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap19" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap19" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap19" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap19" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Acho algo engraÃ§ado.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap20" value="1" required />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap20" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap20" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap20" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap20" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </Step>
                                    <Step label="Passo 3">
                                    <div id="Leap-Page3" class="form">
                                            <label class="statement-leap text-start">Sinto-me humilhado(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap21" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap21" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap21" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap21" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap21" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto-me interessado(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap22" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap22" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap22" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap22" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap22" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto inveja de alguÃ©m.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap23" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap23" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap23" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap23" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap23" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com medo.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap24" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap24" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap24" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap24" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap24" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto uma necessidade.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap25" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap25" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap25" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap25" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap25" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com nojo.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap26" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap26" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap26" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap26" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap26" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto uma obrigaÃ§Ã£o.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap27" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap27" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap27" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap27" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap27" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto-me orgulhoso(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap28" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap28" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap28" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap28" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap28" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Tenho pena de alguÃ©m.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap29" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap29" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap29" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap29" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap29" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">FaÃ§o pouco caso de alguÃ©m.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap30" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap30" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap30" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap30" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap30" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </Step>
                                    <Step label="Passo 4">
                                    <div id="Leap-Page4" class="form">
                                            <label class="statement-leap text-start">Sinto raiva.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap31" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap31" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap31" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap31" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap31" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou refletindo.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap32" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap32" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap32" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap32" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap32" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto saudade de alguÃ©m.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap33" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap33" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap33" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap33" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap33" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com sede.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap34" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap34" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap34" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap34" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap34" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou sem graÃ§a.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap35" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap35" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap35" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap35" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap35" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com sono.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap36" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap36" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap36" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap36" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap36" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto-me surpreso(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap37" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap37" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap37" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap37" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap37" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou assustado(a).</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap38" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap38" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap38" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap38" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap38" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Sinto-me triste.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap39" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap39" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap39" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap39" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap39" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>

                                            <label class="statement-leap text-start">Estou com vergonha.</label>
                                            <ul class="likert-leap">
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap40" value="1" />
                                                    <p>1 <br></br>(Muito Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap40" value="2" />
                                                    <p>2 <br></br>(Fraco)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap40" value="3" />
                                                    <p>3 <br></br>(Mais ou Menos)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap40" value="4" />
                                                    <p>4 <br></br>(Forte)</p>
                                                </li>
                                                <li>
                                                    <input class="form-check-input" type="radio" name="likert-leap40" value="5" />
                                                    <p>5 <br></br>(Muito Forte)</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </Step>                            
                                </MultiStepForm>
                                {(active === 1 && <Link to="sample"><button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>PrÃ³ximo</button></Link>)}
                                    {(active > 1 && active !== 4 &&
                                        <div>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)} >Anterior</button>
                                            </Link>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>PrÃ³ximo</button>
                                            </Link>
                                        </div>)
                                    }
                                    {(active === 4) &&
                                        <div>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                                            </Link>
                                            <button class="btn whitebutton btn-lg" >Salvar</button>
                                        </div>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Leap;