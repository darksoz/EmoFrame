import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import PsychologicalAspect from '../../Components/PsychologicalAspect/PsychologicalAspect';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BiologicalAspect from '../../Components/BiologicalAspect/BiologicalAspect';
import SocialAspect from '../../Components/SocialAspect/SocialAspect';
import MultidimensionalAspect from '../../Components/MultidimensionalAspect/MultidimensionalAspect';
import { MultiStepForm, Step } from 'react-multi-form';
import { Link } from 'react-scroll';


function Page() {

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
        
        
    }

    
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>PAGE</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <h1>AVALIAÇÃO DE RISCO DE VULNERABILIDADE BIOPSICOSSOACIAL EM IDOSOS</h1>

                <MultiStepForm activeStep={active} >
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
                                   
                                    
            </Container>
        </>
    );
}
export default Page;