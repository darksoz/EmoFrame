import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel
} from "@mui/material";

function LeapForm(props) {
    return (
        <>
            <FormLabel component="legend"
            >{props.Title}</FormLabel>
            <RadioGroup
                className="radio"
                row
                aria-label="gender"
                name={props.Name}
            >
                <FormControlLabel
                    value="female"
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
                    value="male"
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
                    value="otherq"
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
                    value="otherw"
                    control={<Radio />}
                    label="Forte"
                />
                <FormControlLabel
                    value="othersdfs"
                    d
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