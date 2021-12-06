import React from 'react';
import LeapExample from '../../Components/LeapExample/LeapExample';
import { MultiStepForm, Step } from 'react-multi-form';
import { Link } from 'react-scroll';
import LeapForm from '../../Components/LeapForm/LeapForm';
import arrayShuffle from 'array-shuffle';
import { Questions1 } from "../../services/Questions/Leap/Leap.js";
import { Questions2 } from "../../services/Questions/Leap/Leap.js";
import { Questions3 } from "../../services/Questions/Leap/Leap.js";
import { Questions4 } from "../../services/Questions/Leap/Leap.js";
import sortArray from 'sort-array';
import { getUsername } from '../../services/auth';
import ModalTest from '../../Components/Modal/ModalTest';
import { SaveLeapTest } from '../../services/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let thirdQuestions = arrayShuffle(Questions3);
let fourthQuestions = arrayShuffle(Questions4);
let amoundOfQuestions = (firstQuestions.length + secondQuestions.length + thirdQuestions.length + fourthQuestions.length);

function Leap() {

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
        let json = { "Datetime": Date.now(), "Username": getUsername(), "Questions": sortArray(answers, { by: 'id', }) }
        console.log("Json", json)
        json = JSON.stringify(json);

        let response = await SaveLeapTest(json);
        if (response.status === 201) {
            console.log("Dados salvos aqui ==> ", response.data);
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
            <ModalTest Success={success} Title={title} Body={body} Reveal={show} Finish={"/dashboard"} Retry={true} />
            <Container>
                <Row>
                    <Col>
                        <div class="wrap">
                            <LeapExample />
                            <hr></hr>
                            <blockquote class="lead ml-5 p-3">  Marque o quanto você sente <span class="bold">NESTE MOMENTO</span> de cada um destes sentimentos,
                                sendo 1 (um) uma intensidade muito fraca e 5 (cinco) uma intensidade muito forte. </blockquote>
                            <div>
                                <div style={{ width: '100%', margin: "200", alignContent: "center" }} onChange={handleChange}>
                                    <MultiStepForm activeStep={active} >
                                        <Step label="Passo 1">
                                            {
                                                firstQuestions.map((content, index) => (
                                                    <>
                                                        <div style={{
                                                            marginBottom: "20px",
                                                        }}>
                                                            <LeapForm Title={content.Title}
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
                                                            <LeapForm Title={content.Title}
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
                                                            <LeapForm Title={content.Title}
                                                                Name={content.Name} />
                                                            <hr></hr>
                                                        </div>
                                                    </>
                                                ))
                                            }
                                        </Step>
                                        <Step label="Passo 4">
                                            {

                                                fourthQuestions.map((content, index) => (
                                                    <>
                                                        <div style={{
                                                            marginBottom: "20px",
                                                        }}>
                                                            <LeapForm Title={content.Title}
                                                                Name={content.Name} />
                                                            <hr></hr>
                                                        </div>
                                                    </>
                                                ))
                                            }
                                        </Step>
                                    </MultiStepForm>
                                    {(active === 1 && <Link to="sample"><button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>Próximo</button></Link>)}
                                    {(active > 1 && active !== 4 &&
                                        <div>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)} >Anterior</button>
                                            </Link>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>Próximo</button>
                                            </Link>
                                        </div>)
                                    }
                                    {(active === 4 && answers.length === amoundOfQuestions) &&
                                        <div>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                                            </Link>
                                            <button class="btn whitebutton btn-lg" onClick={() => handleFormData()}>Salvar</button>
                                        </div>
                                    }
                                    {(active === 4 && answers.length !== amoundOfQuestions) &&
                                        <div>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                                            </Link>
                                        </div>
                                    }
                                </div>
                            </div>
                                    </div>
                        </Col>
                    </Row>
                </Container>
            </>

            )
}
            export default Leap;