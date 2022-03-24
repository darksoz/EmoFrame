import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import PsychologicalAspect from '../../Components/PsychologicalAspect/PsychologicalAspect';
import Row from 'react-bootstrap/Row';
import BiologicalAspect from '../../Components/BiologicalAspect/BiologicalAspect';
import SocialAspect from '../../Components/SocialAspect/SocialAspect';
import MultidimensionalAspect from '../../Components/MultidimensionalAspect/MultidimensionalAspect';
import { MultiStepForm, Step } from 'react-multi-form';
import { Link } from 'react-scroll';
import { getUsername } from '../../services/auth';
import sortArray from 'sort-array';
import { TextareaAutosize } from '@mui/material';
import { SavePageTest } from '../../services/api';


function Page() {

    const [active, setActive] = React.useState(1);
    const [answers, setAnswers] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleChange = (event) => {
        const id = event.target.name;
        const data = { id, answer: event.target.value };
        console.log(data)
        if (answers.some(a => a.id === id)) {
            setAnswers([...answers.filter(b => b.id !== id), data]);
        }
        else {
            setAnswers([...answers, data]);
        }
    }

    const handleFormData = async () => {
        let json = { "Datetime": new Date(Date.now()), "Instrument": "page", "Username": getUsername(), "Questions": sortArray(answers, { by: 'id', }) }
        console.log("Json", json)
        json = JSON.stringify(json);
        let response = await SavePageTest(json);
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
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>PAGE</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <h1>AVALIAÇÃO DE RISCO DE VULNERABILIDADE BIOPSICOSSOACIAL EM IDOSOS</h1>
                <div onChange={handleChange}>
                <MultiStepForm activeStep={active}>
                    <Step label="Passo 1">
                        <PsychologicalAspect />
                    </Step>

                    <Step label="Passo 2">

                        <BiologicalAspect />
                   

                    </Step>

                    <Step label="Passo 3">
                        <SocialAspect />

                    </Step>

                    <Step label="Passo 4">
                        <MultidimensionalAspect />

                    </Step>
            
                </MultiStepForm>
                </div>
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
                                   {( active === 4 &&
                                        <div>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)} >Anterior</button>
                                            </Link>
                                            <button class="btn whitebutton btn-lg" onClick={() => handleFormData()}>Salvar</button>
                                        </div>)
                                    }
            

            </Container>
        </>
    );
}
export default Page;