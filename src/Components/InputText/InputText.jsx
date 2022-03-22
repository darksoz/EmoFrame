import { React } from "react";
import { Input, TextField } from "@mui/material";

function InputText(props) {
  const sliceText = (text) => text.split("_");
  const lastItem = sliceText(props.text).length -1;
  console.log('last' +  lastItem);
  return (
    <>
      <label>
        {sliceText(props.text).map((texto, index) => (
          <>
          {texto}
          {lastItem !== index 
          ?  <input type='text'/>
          : ''
            }
        </>
        ))}
      </label>
    </>
  );
}

export default InputText;
