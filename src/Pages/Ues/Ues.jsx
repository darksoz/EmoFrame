import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import UesApp from '../../Components/UesApp/UesApp';
import { Breadcrumb } from "react-bootstrap";
import { Container } from '@mui/material';
import { Questions1 } from "../../services/Questions/Ues/Ues.js";
import { Questions2 } from "../../services/Questions/Ues/Ues.js";
import { Questions3 } from "../../services/Questions/Ues/Ues.js";
import sortArray from 'sort-array';
import { MultiStepForm, Step } from 'react-multi-form';
import { Link } from 'react-scroll';
import UesForm from '../../Components/UesForm/UesForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrayShuffle from 'array-shuffle';



let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let thirdQuestions = arrayShuffle(Questions3);
let amoundOfQuestions = (firstQuestions.length + secondQuestions.length + thirdQuestions.length);

function Ues() {

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


    return (
        <>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard' style={{ marginLeft: '12px' }}>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>UES-BR</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <Row>
                    <Col>
                    <div id="sample" onChange={handleChange}>
                        <MultiStepForm activeStep={active}>
                            <Step label="Passo 1">
                                <>
                                <div style={{
                                                marginBottom: "70px", paddingBottom: "20px"
                                            }}>
                                                <UesApp/>
                                            </div>

                                </>

                            </Step>

                            <Step label="Passo 2">
                                {
                                    firstQuestions.map((content, index) => (
                                        <>
                                            <div style={{
                                                marginBottom: "20px",
                                            }}>
                                                <UesForm Title={content.Title}
                                                    Name={content.Name} />
                                                <hr></hr>
                                            </div>
                                        </>
                                    ))
                                }
                            </Step>

                            <Step label="Passo 3">
                                {

                                    secondQuestions.map((content, index) => (
                                        <>
                                            <div style={{
                                                marginBottom: "20px",
                                            }}>
                                                <UesForm Title={content.Title}
                                                    Name={content.Name} />
                                                <hr></hr>
                                            </div>
                                        </>
                                    ))
                                }

                            </Step>
                            <Step label="Passo 4">
                                {

                                    thirdQuestions.map((content, index) => (
                                        <>
                                            <div style={{
                                                marginBottom: "20px",
                                            }}>
                                                <UesForm Title={content.Title}
                                                    Name={content.Name} />
                                                <hr></hr>
                                            </div>
                                        </>
                                    ))
                                }

                            </Step>

                        </MultiStepForm>
                        </div>
                    </Col>
                </Row>
                <div className='mt-5'>

                    <Footer />

                </div>
            </Container>

        </>
    );
}
export default Ues;