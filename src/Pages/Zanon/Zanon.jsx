import React from 'react';
import Container from 'react-bootstrap/Container';
import { Breadcrumb } from "react-bootstrap";
import './Zanon.css';
import ZanonExample from '../../Components/ZanonExample/ZanonExample';
import ZanonForm from '../../Components/ZanonForm/ZanonForm';
import { MultiStepForm, Step } from 'react-multi-form';
import { Link } from 'react-scroll';
import arrayShuffle from 'array-shuffle';
import sortArray from 'sort-array';
import { getUsername } from '../../services/auth';
import ModalTest from '../../Components/Modal/ModalTest';
import { Questions1 } from "../../services/Questions/Zanon/Zanon.js";
import { Questions2 } from "../../services/Questions/Zanon/Zanon.js";
import { SaveTest } from '../../services/api';

let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let amountOfQuestions = (firstQuestions.length + secondQuestions.length);


function Zanon() {
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
        let json = { "Datetime": new Date(Date.now()), "Instrument": "zanon", "Username": getUsername(), "Questions": sortArray(answers, { by: 'id', }) }
        json = JSON.stringify(json);
        let response = await SaveTest(json, 'zanon');
        if (response.status === 201) {
            setTitle("Teste concluído");
            setBody("Atividade realizada com sucesso");
            setSuccess(true);
            setShow(true);
        }
        else {
            setTitle("Erro na conclusão");
            setBody("Atividade não foi concluída");
            setSuccess(false);
        }
    }


    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Zanon</Breadcrumb.Item>
            </Breadcrumb>

            <ModalTest Success={success} Title={title} Body={body} Reveal={show} Finish={"/dashboard"} Retry={true} />

            <Container>
                <ZanonExample />
                <div id="sample" onChange={handleChange}>
                    <MultiStepForm activeStep={active} >
                        <Step label="Passo 1">
                            {
                                firstQuestions.map((content, index) => (
                                    <>
                                        <div style={{
                                            marginBottom: "20px",
                                        }}>
                                            <ZanonForm Title={content.Title}
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
                                            <ZanonForm Title={content.Title}
                                                Name={content.Name} />
                                            <hr></hr>
                                        </div>
                                    </>
                                ))
                            }
                        </Step>
                    </MultiStepForm>
                </div>
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
export default Zanon;