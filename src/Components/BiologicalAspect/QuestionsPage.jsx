/* eslint-disable no-undef */
import React from "react";
import { Container } from "react-bootstrap";
import InputText from "../InputText/InputText";
import TableDiagnostico from "./TableDiagnostico";

function QuestionsPage(props) {
  const checkTextBox = (str) => {
    let textBox = ["46"];
    return textBox.includes(String(str));
  };

  return (
    <>
      <p className="h5 mb-3 mt-3 border p-4">
        {props.pergunta.input ? (
          <InputText
            text={props.pergunta.title}
            question={props.pergunta.question}
            value={props.pergunta.point === true ? "imc" : ""}
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
                    name={props.pergunta.question + "." + (index + 1)}
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
        {props.pergunta.question === 44 || props.pergunta.question === 45 ? (
          ""
        ) : (
          <p className="h5 mb-3 mt-3 p-1">
            <Container className="ml-5">
              <div className="form-check" style={{ minHeight: "2.0em" }}>
                <input
                  className="form-check-input input-page"
                  type="radio"
                  value={props.pergunta.yes}
                  name={props.pergunta.question}
                />
                <label className="form-check-label label-page">
                  {props.pergunta.yes} = SIM
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input input-page"
                  type="radio"
                  value={props.pergunta.no}
                  name={props.pergunta.question}
                />
                <label className="form-check-label label-page l-yes">
                  {props.pergunta.no} = NÃO
                </label>
              </div>
            </Container>
          </p>
        )}
      </p>
    </>
  );
}

export default QuestionsPage;
