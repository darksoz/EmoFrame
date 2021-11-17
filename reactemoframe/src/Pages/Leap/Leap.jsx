import React from 'react';
import LeapExample from '../../Components/LeapExample/LeapExample';
import {FormControl} from "@mui/material";
import LeapForm from '../../Components/LeapForm/LeapForm';
import arrayShuffle from 'array-shuffle';
import { Questions } from "../../services/Questions/Leap/Leap.js";



function Leap() {

    const [active, setActive] = React.useState(1);
    function handleChange(event) {
        console.log("Size: ", Questions.length);
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
                                        arrayShuffle(Questions).map((content, index) => (
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