import React from 'react';
import './Sus.css';
import SusExample from '../../Components/SusExample/SusExample';
import { MultiStepForm, Step } from 'react-multi-form';
import { Link } from 'react-scroll';
import SusForm from '../../Components/SusForm/SusForm';
import arrayShuffle from 'array-shuffle';
import { Questions1 } from "../../services/Questions/Sus/Sus.js";
import { Questions2 } from "../../services/Questions/Sus/Sus.js";
import { Questions3 } from "../../services/Questions/Sus/Sus.js";
import { getUsername } from '../../services/auth';
import ModalTest from '../../Components/Modal/ModalTest';
import sortArray from 'sort-array';
import { SaveSusTest } from '../../services/api';

let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let thirdQuestions = arrayShuffle(Questions3);
let amountOfQuestions = (firstQuestions.length + secondQuestions.length + thirdQuestions.length);

function Sus() {
    const [active, setActive] = React.useState(1);
    const [answers, setAnswers] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [solution, setSolution] = React.useState("");
    

    const handleSolutionName = (event) => {
        setSolution(event.target.value);
        console.log(event.target.value);
    }

    const handleChange = (event) => {
        const id = parseInt(event.target.name);
        const data = { id, answer: event.target.value };

        if (answers.some(a => a.id === id)) {
            setAnswers([...answers.filter(b => b.id !== id), data]);
        }
        else {
            setAnswers([...answers, data]);
        }
    }

    const handleFormData = async () => {
        let json = {"Datetime": Date.now(), "Instrument": "sus", "Username": getUsername(), "Solution": solution, "Questions": sortArray(answers, { by: 'id',})}
        json = JSON.stringify(json);

        let response = await SaveSusTest(json);

        if(response.status === 201 ){
            console.log("Dados salvos aqui ==> ", response.data);
            setTitle("Teste concluído");
            setBody("Atividade realizada com sucesso");
            setSuccess(true);
            setShow(true);
        }
        else{
            setTitle("Erro na conclusão");
            setBody("Atividade não foi concluída");
            setSuccess(false);
        }
    }

    return (
        <>
            <ModalTest Success={success} Title={title} Body={body} Reveal={show} Finish={"/dashboard"} Retry={true} />

            <div class="container">
                <h1>SUS</h1>
                <blockquote class="blockquote">
                    <p class="lead ml-5 p-3 text-start"> Para cada uma das seguintes afirmações, selecione a opção que melhor descreve suas reações ao <input id="name" type="text" onChange={handleSolutionName} placeholder="Nome da solução" name="sol" required/> hoje.
                    <br></br>
                    
                    </p>
                    <p>Clique no botão abaixo para ver exemplos de preenchimento:</p>

                </blockquote>
                <div class="row">
                    <div class="col md-2">
                        <div class="wrap" id="sample">
                            
                            <SusExample />
                            <hr></hr>
                        </div>
                        <blockquote>
                            <p class="lead ml-5 p-3">
                                Nós temos cinco pontos de uma escala que varia de "Concordo Fortemente" a "Discordo Fortemente", eu gostaria que você me dissesse a resposta que melhor descreve a sua reação para cada uma das afirmações abaixo.
                            </p>
                        </blockquote>
                        <div onChange={handleChange}>
                            <MultiStepForm activeStep={active} >
                                <Step label="Passo 1">
                                    {
                                        firstQuestions.map((content, index) => (
                                            <>
                                                <div style={{
                                                    marginBottom: "20px",
                                                }}>
                                                    <SusForm Title={content.Title}
                                                        Name={content.Name} />
                                                    <hr></hr>
                                                </div>
                                            </>
                                        ))
                                    }
                                </Step>
                                <Step label="Passo 2">
                                    {
                                        secondQuestions.map((content, index) => (
                                            <>
                                                <div style={{
                                                    marginBottom: "20px",
                                                }}>
                                                    <SusForm Title={content.Title}
                                                        Name={content.Name} />
                                                    <hr></hr>
                                                </div>
                                            </>
                                        ))
                                    }
                                </Step>
                                <Step label="Passo 3">
                                    {
                                        thirdQuestions.map((content, index) => (
                                            <>
                                                <div style={{
                                                    marginBottom: "20px",
                                                }}>
                                                    <SusForm Title={content.Title}
                                                        Name={content.Name} />
                                                    <hr></hr>
                                                </div>
                                            </>
                                        ))
                                    }
                                </Step>
                            </MultiStepForm>
                            {(active === 1 && <Link to="sample"><button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>Próximo</button></Link>)}
                            {(active > 1 && active !== 3 &&
                                <div>
                                    <Link to="sample">
                                        <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)} >Anterior</button>
                                    </Link>
                                    <Link to="sample">
                                        <button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>Próximo</button>
                                    </Link>
                                </div>)
                            }
                            {(active === 3 && answers.length === amountOfQuestions && solution.trim() !== "") &&
                                <div>
                                    <Link to="sample">
                                        <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                                    </Link>
                                    <button class="btn whitebutton btn-lg" onClick={() => handleFormData()}>Salvar</button>
                                </div>
                            }
                            {(active === 3  && (answers.length !== amountOfQuestions || answers.length === amountOfQuestions)&& solution.trim() === "") &&
                                <div>
                                    <Link to="sample">
                                        <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sus;