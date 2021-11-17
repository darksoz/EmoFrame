import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel
} from "@mui/material";
import './LeapForm.css';

function LeapForm(props) {
    return (
        <>
            <FormLabel style={{ fontSize:"1.4em", 
                                fontWeight:"bolder",
                                textAlign:"start"}} 
                       component="legend">{props.Title}</FormLabel>
            <RadioGroup
                className="radio"
                row
                aria-label="gender"
                name={props.Name}
            >
                <FormControlLabel
                    value="1"
                    id="just-line-break"
                    labelPlacement="bottom"
                    control={<Radio />}
                    label={
                        <div style={{
                            "text-align": "center",
                            "whiteSpace": "pre-wrap"
                        }}>
                            {"Muito\nfraco"}
                        </div>
                    }
                />
                <FormControlLabel
                    labelPlacement="bottom"
                    value="2"
                    control={<Radio />}
                    label={
                        <div style={{
                            "text-align": "center",
                            "whiteSpace": "pre-wrap"
                        }}>
                            {"Fraco\n"}
                        </div>
                    }
                />
                <FormControlLabel
                    labelPlacement="bottom"
                    value="3"
                    control={<Radio />}
                    label={
                        <div style={{
                            "text-align": "center",
                            "whiteSpace": "pre-wrap"
                        }}>
                            {"Mais ou\nmenos"}
                        </div>
                    }
                />
                <FormControlLabel
                    labelPlacement="bottom"
                    value="4"
                    control={<Radio />}
                    label="Forte"
                />
                <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label={
                        <div style={{
                            "text-align": "center",
                            "whiteSpace": "pre-wrap"
                        }}>
                            {"Muito\nforte"}
                        </div>
                    }
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="99"
                    control={<Radio />}
                    label={
                        <div style={{
                            "text-align": "center",
                            "whiteSpace": "pre-wrap"
                        }}>
                            {"Não quero\nresponder"}
                        </div>
                    }
                    labelPlacement="bottom"
                />
            </RadioGroup>
        </>
    );
}

export default LeapForm;