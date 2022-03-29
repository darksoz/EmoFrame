import { React } from "react";

function InputText(props) {
  const sliceText = (text) => text.split("_");
  const lastItem = sliceText(props.text).length - 1;
  return (
    <>
      <p className="h5">
        {props.question} -
        {sliceText(props.text).map((texto, index) => (
          <>
            {texto}
            {lastItem !== index ? (
              <input
                type="text"
                style={{ width: "30%" , height:'10px' }}
                name={props.question + "." + index}
              />
            ) : (
              ""
            )}
          </>
        ))}
      </p>
    </>
  );
}

export default InputText;
