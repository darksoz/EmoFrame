import React from 'react';
import LeapExample from '../../Components/LeapExample/LeapExample';
import {FormControl} from "@mui/material";
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

let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let thirdQuestions = arrayShuffle(Questions3);
let fourthQuestions = arrayShuffle(Questions4);

function Leap() {

    const [active, setActive] = React.useState(1);
    const [answers, setAnswers] = React.useState([]);
    
    const handleChange = (event) => {
        const id = parseInt(event.target.name);
        const data = { id, answer: event.target.value };

        

        if (answers.some(a => a.id === id)) {
            setAnswers([...answers.filter(b => b.id !== id), data]);
        }
        else{
            setAnswers([...answers, data]);
        }

    }

    const handleFormData = () => {
        let json = {"Datetime": Date.now(), "Username": getUsername(), "Questions": sortArray(answers, { by: 'id',})}
        console.log("Json", json)
    }

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col md-2">
                        <div class="wrap">
                            <LeapExample />
                            <hr></hr>
                            <blockquote class="lead ml-5 p-3">  Marque o quanto você sente <span class="bold">NESTE MOMENTO</span> de cada um destes sentimentos,
                                sendo 1 (um) uma intensidade muito fraca e 5 (cinco) uma intensidade muito forte. </blockquote>
                            <div>
                                <FormControl component="fieldset" style={{ width: '100%'}} onChange={handleChange}>
                                    <MultiStepForm activeStep={active} >
                                        <Step label="Passo 1">
                                            {
                                                
                                                firstQuestions.map((content, index) => (
                                                    <>
                                                        <div style={{
                                                                        marginBottom: "20px",
                                                                    }}>
                                                            <LeapForm Title={content.Title} 
                                                                    Name={content.Name}/>
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
                                                                    Name={content.Name}/>
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
                                                                    Name={content.Name}/>
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
                                                                    Name={content.Name}/>
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
                                    {(active === 4) &&
                                        <div>
                                            <Link to="sample">
                                                <button class="btn whitebutton btn-lg" onClick={() => setActive(active - 1)}>Anterior</button>
                                            </Link>
                                            <button class="btn whitebutton btn-lg" onClick={() => handleFormData()}>Salvar</button>
                                        </div>
                                    }
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Leap;