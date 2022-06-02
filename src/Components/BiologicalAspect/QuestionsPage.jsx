/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import InputText from "../InputText/InputText";
import TableDiagnostico from "./TableDiagnostico";
import { useState } from "react";

function QuestionsPage(props) {
  let teste;
  const [data, setData] = useState("");
  const [imc, setIMC] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const calcularIMC = (kilos, altura) => {
    altura = altura / 100;
    let imc = kilos / (altura * altura);
    return imc;
  };

  useEffect(() => {
    if (props.respostas.length > 41) {
      let pesoResposta = props.respostas.find(
        (item) => item.id == "35.1"
      )?.answer;
      let alturaResposta = props.respostas.find(
        (item) => item.id == "35.2"
      )?.answer;
      
      setPeso(pesoResposta);
      setAltura(alturaResposta);

      teste = data;
    }
  }, [props.respostas]);

  useEffect(() => {
    if (peso != undefined && altura != undefined) {
      setIMC(calcularIMC(+peso, +altura).toFixed(2));
    }
  },[peso,altura])

  const checkTextBox = (str) => {
    let textBox = ["46"];
    return textBox.includes(String(str));
  };

  const imcFunc = (data) => {
    setData(data);
  };

  return (
    <>
      <p className="h5 mb-3 mt-3 border p-4">
        {props.pergunta.input ? (
          <InputText
            text={props.pergunta.title}
            question={props.pergunta.question}
            value={props.pergunta.point === true ? "imc" : ""}
            imcFunc={imcFunc}
            setIMC={setIMC}
            imc={imc}
          />
        ) : (
          props.pergunta.question + "-" + props.pergunta.title
        )}

        {props.pergunta.tooltip != null ? (
          <strong>
            {props.pergunta.tooltip}
            <br />
          </strong>
        ) : (
          ""
        )}
        <br></br>
        <ul style={{ listStyleType: "none", justifyContent: "space-between" }}>
          {props.pergunta.questions?.map((a, index) => (
            <>
              <li>
                <label> {a}</label>
                {index === props.pergunta.questions.length - 1 ? (
                  <input
                    type="text"
                    style={{ width: "15%" }}
                    name={props.pergunta.question + "." + (index + 1)}
                  ></input>
                ) : (
                  <input
                    style={{ marginLeft: "0.5em" }}
                    type="checkbox"
                    value={a}
                    name={props.pergunta.question + ".1" + (index + 1)}
                  ></input>
                )}
              </li>
            </>
          ))}
        </ul>

        {checkTextBox(props.pergunta.question) && (
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name={`${props.pergunta.question}.7`}
          ></textarea>
        )}
        {props.pergunta.question === 54 && (
          <TableDiagnostico
            remedios={props.dadosQuestoes}
            diagnosticoItem={props.respostas}
          ></TableDiagnostico>
        )}
        {props.pergunta.question === 43 && <strong> IMC = {imc}</strong>}
        {props.pergunta.question === 44 || props.pergunta.question === 45 ? (
          ""
        ) : (
          <Container className="w-25 mt-4">
            <div className="form-check" style={{ minHeight: "2.0em" }}>
              <input
                className="form-check-input"
                type="radio"
                value={props.pergunta.yes}
                name={props.pergunta.question}
              />
              <label className="form-check-label labelal ml-1">
                {props.pergunta.yes} = SIM
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={props.pergunta.no}
                name={props.pergunta.question}
              />
              <label
                className="form-check-label labelal mt-1"
                style={{ marginLeft: "5px" }}
              >
                {props.pergunta.no} = NÃO
              </label>
            </div>
          </Container>
        )}
      </p>
    </>
  );
}

export default QuestionsPage;
