import React from 'react';
import LeapExample from '../../Components/LeapExample/LeapExample';
import {FormControl} from "@mui/material";
import LeapForm from '../../Components/LeapForm/LeapForm';
import arrayShuffle from 'array-shuffle';
import { Questions } from "../../services/Questions/Leap/Leap.js";
import sortArray from 'sort-array';

let nada = [];
let firstquestions = arrayShuffle(Questions);

function Leap() {

    const [active, setActive] = React.useState(1);
    const [answers, setAnswers] = React.useState([]);
    
    function handleChange(event) {
        const id = event.target.name;
        const data = { id, answer: event.target.value };

        

        if (answers.some(a => a.id === id)) {
            setAnswers([...answers.filter(b => b.id !== id), data]);
        }
        else{
            setAnswers([...answers, data]);
        }
        Json(sortArray(answers, { by: 'id',}));

    }

    function Json(data){
        let json = {"Solution": "Leap", "Datetime": "15h", "Username": "Fulano", "Questions": data}
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
                                <FormControl component="fieldset" onChange={handleChange}>
                                    {
                                        firstquestions.map((content, index) => (
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