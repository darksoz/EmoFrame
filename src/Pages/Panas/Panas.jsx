import React from 'react';
import './Panas.css';
import Container from 'react-bootstrap/Container';
import { Breadcrumb } from "react-bootstrap";
import PanasExample from '../../Components/PanasExample/PanasExample';
import PanasForm from '../../Components/PanasForm/PanasForm';
import arrayShuffle from 'array-shuffle';
import { Questions1 } from "../../services/Questions/Panas/Panas.js";
import { Questions2 } from "../../services/Questions/Panas/Panas.js";
import { MultiStepForm, Step } from 'react-multi-form';
import { Link } from 'react-scroll';
import sortArray from 'sort-array';
import { getUsername } from '../../services/auth';


const positiveScale = [1, 3, 5, 8, 10, 11, 13, 15, 17, 19];
const negativeScale = [2, 4, 6, 7, 9, 12, 14, 16, 18, 20];

let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let amountOfQuestions = (firstQuestions.length + secondQuestions.length);


function Panas() {

    const [active, setActive] = React.useState(1);
    const [answers, setAnswers] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

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
        let json = { "Datetime": new Date(Date.now()), "Instrument": "leap", "Username": getUsername(), "Questions": sortArray(answers, { by: 'id', }) }
        console.log("Json", json)
        json = JSON.stringify(json);
    }

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Panas</Breadcrumb.Item>
            </Breadcrumb>
            <Container>

                <PanasExample />

                <MultiStepForm activeStep={active}>

                    <Step label="Passo 1">
                        {
                            firstQuestions.map((content, index) => (
                                <>
                                    <div style={{
                                        marginBottom: "20px",
                                    }}>
                                        <PanasForm Title={content.Title}
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
                                        <PanasForm Title={content.Title}
                                            Name={content.Name} />
                                        <hr></hr>
                                    </div>
                                </>
                            ))
                        }

                    </Step>

                </MultiStepForm>
                {(active === 1 && <Link to="sample"><button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>Próximo</button></Link>)}
                {(active > 1 && active !== 2 &&
                    <div>
                        <Link to="sample">
                            <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)} >Anterior</button>
                        </Link>
                        <Link to="sample">
                            <button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>Próximo</button>
                        </Link>
                    </div>)
                }
                {(active === 2 && answers.length === amountOfQuestions) &&
                    <div>
                        <Link to="sample">
                            <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                        </Link>
                        <button class="btn whitebutton btn-lg" onClick={() => handleFormData()}>Salvar</button>
                    </div>
                }
                {(active === 2 && answers.length !== amountOfQuestions) &&
                    <div>
                        <Link to="sample">
                            <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                        </Link>
                    </div>
                }
            </Container>

        </>
    );
}

export default Panas;