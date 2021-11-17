import React from 'react';
import './Leap.css';
import LeapExample from '../../Components/LeapExample/LeapExample';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from "@mui/material";

import LeapForm from '../../Components/LeapForm/LeapForm';

import { Questions } from "../../services/Questions/Leap/Leap.js";

function Leap() {

    const [active, setActive] = React.useState(1);
    console.log("Questions ==> ", Questions[0]["Name"]);
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
                                <FormControl component="fieldset">
                                    {
                                        Questions.map((content, index) => (
                                            <>
                                                <div style={{
                                                                marginBottom: "20px",
                                                            }}>
                                                    <LeapForm Title={content.Title} Name={content.Name}/>
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