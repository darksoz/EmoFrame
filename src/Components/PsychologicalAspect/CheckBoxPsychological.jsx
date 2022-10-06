import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";


function CheckBoxPsychological({name, isChecked}) {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(isChecked);
    }
    , [isChecked]);

    return (
        <>
            <Checkbox name={name} checked={checked} value={!checked} onChange={()=>setChecked(!checked)}>

            </Checkbox>
        </>
    )
}
export default CheckBoxPsychological;