import React, { useEffect, useState } from "react";

function ImcInput(props) {
  const [imc, setImc] = useState(0);
  const [pesoValue, setPesoValue] = useState(0);
  const [alturaValue, setAlturaValue] = useState(0);

  useEffect(() => {
    if (pesoValue !== 0 && alturaValue !== 0) {
      let imcTeste = calcularIMC(pesoValue, alturaValue).toFixed(2);
      setImc(imcTeste);
    }
  }, [alturaValue, pesoValue]);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "35.1") {
      setPesoValue(parseFloat(value));
    }
    if (name === "35.2") {
      setAlturaValue(parseFloat(value));
    }
  };

  const sliceText = (text) => text.split("_");
  const lastItem = sliceText(props.text).length - 1;
  const calcularIMC = (kilos, altura) => {
    altura = altura / 100;
    let imc = kilos / (altura * altura);
    return imc;
  };
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
                style={{ width: "30%", height: "10px" }}
                name={props.question + "." + (index + 1)}
                text={index === 2 ? "imc" : ""}
                onBlur={index !== 2 ? handleBlur : null}
                key={index}
              />
            ) : (
              <>
                <br />
                <strong> IMC = {imc}</strong>
              </>
            )}
          </>
        ))}
      </p>
    </>
  );
}

export default ImcInput;
