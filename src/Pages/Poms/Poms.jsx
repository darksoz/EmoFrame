import React from 'react';
import { Breadcrumb, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PomsExample from "../../Components/PomsExample/PomsExample";
import { Questions1 } from "../../services/Questions/Poms/Poms.js";
import { Questions2 } from "../../services/Questions/Poms/Poms.js";
import { Questions3 } from "../../services/Questions/Poms/Poms.js";
import arrayShuffle from 'array-shuffle';
import PomsForm from '../../Components/PomsForm/PomsForm';
import { MultiStepForm, Step } from "react-multi-form";
import Link from 'react-scroll/modules/components/Link';
import sortArray from 'sort-array';
import { getUsername } from '../../services/auth';
import ModalTest from '../../Components/Modal/ModalTest';
import { SaveTest } from '../../services/api';



let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let thirdQuestions = arrayShuffle(Questions3);
let amountOfQuestions = (firstQuestions.length + secondQuestions.length + thirdQuestions.length);

function Poms() {

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
        let json = { "Datetime": new Date(Date.now()), "Instrument": "poms", "Username": getUsername(), "Questions": sortArray(answers, { by: 'id', }) }
        json = JSON.stringify(json);

        let response = await SaveTest(json,"poms");
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
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard' style={{marginLeft:'12px'}}>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>BRUMS</Breadcrumb.Item>
            </Breadcrumb>

            <ModalTest Success={success} Title={title} Body={body} Reveal={show} Finish={"/dashboard"} Retry={true} />


            <Container>
                <PomsExample />
                <div onChange={handleChange}>
                    <MultiStepForm activeStep={active} >
                        <Step label="Passo 1">
                            {
                                firstQuestions.map((content, index) => (
                                    <>
                                        <div style={{
                                            marginBottom: "20px",
                                        }}>
                                            <PomsForm Title={content.Title}
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
                                            <PomsForm Title={content.Title}
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
                                            <PomsForm Title={content.Title}
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
                {(active > 1 && active !== 3 &&
                    <div>
                        <Link to="sample">
                            <button class="btn whitebutton btn-lg" style={{marginRight:'20px'}} onClick={() => setActive(active - 1)} >Anterior</button>
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
                        <button class="btn whitebutton btn-lg" style={{marginLeft:'20px'}} onClick={handleFormData}>Salvar</button>
                    </div>
                }
                {(active === 3 && answers.length !== amountOfQuestions) &&
                    <div>
                        <Link to="sample">
                            <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                        </Link>
                    </div>
                }
            </Container>

            <Footer />
        </>

    );
}
export default Poms;