import { React } from "react";
import ImcInput from "./ImcInput";

function InputText(props) {
  const sliceText = (text) => text.split("_");
  const lastItem = sliceText(props.text).length - 1;
  return (
    <>
      <p className="h5">
        {props.value === "imc" ? (
          <ImcInput text={props.text} question={props.question} />
        ) : (
          <>
            {props.question} -
            {sliceText(props.text).map((texto, index) => (
              <>
                {texto}
                {lastItem !== index ? (
                  <input
                    type="text"
                    key={index}
                    style={{ width: "30%", height: "10px" }}
                    name={props.question + "." + (index + 1)}
                  />
                ) : (
                  ""
                )}
              </>
            ))}
          </>
        )}
      </p>
    </>
  );
}

export default InputText;