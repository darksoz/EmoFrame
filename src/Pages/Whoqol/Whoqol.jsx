import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WhoqolExample from '../../Components/WhoqolExample/WhoqolExample';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { MultiStepForm, Step } from 'react-multi-form';
import { Questions1 } from "../../services/Questions/Whoqol/Whoqol.js";
import { Questions2 } from "../../services/Questions/Whoqol/Whoqol.js";
import { Questions3 } from "../../services/Questions/Whoqol/Whoqol.js";
import WhoqolForm from '../../Components/WhoqolForm/WhoqolForm';
import arrayShuffle from 'array-shuffle';
import { Link } from 'react-scroll';



let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let thirdQuestions = arrayShuffle(Questions3);
let amountOfQuestions = (firstQuestions.length + secondQuestions.length + thirdQuestions.length);


function Whoqol() {

    const [active, setActive] = React.useState(1);
    const [answers, setAnswers] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    return (
        <>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard' style={{ marginLeft: '12px' }}>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Whoqol</Breadcrumb.Item>
            </Breadcrumb>

            <Container>
                <WhoqolExample />
                <Row>
                    <MultiStepForm activeStep={active} >
                        <Step label="Passo 1">
                            {
                                firstQuestions.map((content, index) => (
                                    <>
                                        <div style={{
                                            marginBottom: "20px",
                                        }}>
                                            <WhoqolForm Title={content.Title}
                                                Name={content.Name}
                                                Option1={content.Option1}
                                                Option2={content.Option2}
                                                Option3={content.Option3}
                                                Option4={content.Option4}
                                                Option5={content.Option5} />
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
                                            <WhoqolForm Title={content.Title}
                                                Name={content.Name}
                                                Option1={content.Option1}
                                                Option2={content.Option2}
                                                Option3={content.Option3}
                                                Option4={content.Option4}
                                                Option5={content.Option5} />
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
                                            <WhoqolForm Title={content.Title}
                                                Name={content.Name}
                                                Option1={content.Option1}
                                                Option2={content.Option2}
                                                Option3={content.Option3}
                                                Option4={content.Option4}
                                                Option5={content.Option5} />
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
                                <button class="btn whitebutton btn-lg" style={{ marginRight: '20px' }} onClick={() => setActive(active - 1)} >Anterior</button>
                            </Link>
                            <Link to="sample">
                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active + 1)}>Próximo</button>
                            </Link>
                        </div>)
                    }
                    {(active === 3 && answers.length === amountOfQuestions) &&
                        <div>
                            <Link to="sample">
                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                            </Link>
                            <button class="btn whitebutton btn-lg" style={{ marginLeft: '20px' }}>Salvar</button>
                        </div>
                    }
                    {(active === 4 && answers.length !== amountOfQuestions) &&
                        <div>
                            <Link to="sample">
                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                            </Link>
                        </div>
                    }
                </Row>
                <Footer />
            </Container>

        </>
    );
}
export default Whoqol;