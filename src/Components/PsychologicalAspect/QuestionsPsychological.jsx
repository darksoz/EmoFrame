import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import InputText from "../InputText/InputText";
import ImagesAspect from "../BiologicalAspect/ImagesAspect";
import { Checkbox } from "@mui/material";
import CheckBoxPsychological from "./CheckBoxPsychological";

function QuestionsPsychological(props) {
  const [checked, setChecked] = useState(false);

  const checkTextBox = (str) => {
    let textBox = ["8", "46"];
    return textBox.includes(String(str));
  };
  const returnAnswer = (id, log) => {
    if (props.answers.length != 0 && props.answers !== undefined) {
      let answer = props.answers.find((item) => item.id == id);
      if (answer !== undefined && answer !== null) {
        if (answer.answer !== null && answer.answer !== undefined) {
          return String(answer.answer);
        } else {
          return "";
        }
      }
    } else {
      return "";
    }
  };
  return (
    <>
      <p className="h5 mb-3 mt-3 border p-4">
        {props.pergunta.input ? (
          <InputText
            text={props.pergunta.title}
            question={props.pergunta.question}
            answers={props.answers}
            imc={props.pergunta.point === true ? "imc" : ""}
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
        {props.pergunta.questions?.map((a, index) => (
          <>
            <strong>
              <label> {a}</label>
              <input
                type="checkbox"
                value={a}
                name={props.pergunta.question + "." + (index + 1)}
              ></input>
              <br></br>
            </strong>
          </>
        ))}
        {props.pergunta.question === 2 && (
          <ul style={{ listStyleType: "none" }}>
            {props.pergunta.text?.map((text, index) => (
              <li key={text} name="text">
                <strong>{text}</strong>
                <CheckBoxPsychological
                  name={text+"a"}
                  isChecked={returnAnswer(text) === "true" ? true : false}
                ></CheckBoxPsychological>
              </li>
            ))}
          </ul>
        )}

        {props.pergunta.question === 6 && (
          <ul style={{ listStyleType: "none" }}>
            {props.pergunta.text?.map((text, index) => (
              <li key={text} name="text">
                <strong>{text}</strong>
                <CheckBoxPsychological
                  name={text+"b"}
                  isChecked={returnAnswer(text) === "true" ? true : false}
                ></CheckBoxPsychological>
              </li>
            ))}
          </ul>
        )}
        {props.pergunta.question === 4 && (
          <>
            <p>Posição Correta dos numeros:</p>
            <ul style={{ listStyleType: "none" }}>
              {props.pergunta.text?.map((text, index) => (
                <li key={text} name="text">
                  <strong>{text}</strong>
                  <CheckBoxPsychological
                    name={"4" + ".1" + text}
                    isChecked={
                      returnAnswer("4.1" + text) === "true" ? true : false
                    }
                  ></CheckBoxPsychological>
                </li>
              ))}
            </ul>
          </>
        )}
        {props.pergunta.question === 4 && (
          <>
            <p>
              Ponteiro correto na hora{" "}
              <CheckBoxPsychological
                name={"4.2"}
                isChecked={returnAnswer("4.2") === "true" ? true : false}
              ></CheckBoxPsychological>
            </p>
          </>
        )}
        {props.pergunta.question === 4 && (
          <>
            <p>
              Ponteiro correto nos minutos{" "}
              <CheckBoxPsychological
                name={"4.3"}
                isChecked={returnAnswer("4.3") === "true" ? true : false}
              ></CheckBoxPsychological>
            </p>
          </>
        )}

        {props.pergunta.question === 4 && (
          <p>
            Pontuação Total{" "}
            <input name="4.7" value={returnAnswer("4.7")}></input>
          </p>
        )}
        {props.pergunta.images?.length > 0
          ? props.pergunta.images.map((image, index) => (
              <ImagesAspect
                images={image}
                question={props.pergunta.question}
                answers={props.answers}
                name={index + 1}
                key={index}
              ></ImagesAspect>
            ))
          : ""}
        {props.pergunta.question === 3 && (
          <p>
            Pontuação Total{" "}
            <input type="text" name="3.7" value={returnAnswer("3.7")} />
          </p>
        )}
        {checkTextBox(props.pergunta.question) && (
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name={`${props.pergunta.question}.7`}
            value={returnAnswer(`${props.pergunta.question}.7`)}
          ></textarea>
        )}

        <Container className="w-25 mt-4">
          <div className="form-check" style={{ minHeight: "2.0em" }}>
            <input
              className="form-check-input"
              type="radio"
              value={props.pergunta.yes}
              name={props.pergunta.question}
              checked={
                returnAnswer(props.pergunta.question, props.pergunta.yes) ===
                String(props.pergunta.yes)
                  ? true
                  : false
              }
            />
            <label className="form-check labelal ml-1">
              {props.pergunta.yes} = SIM
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={props.pergunta.no}
              name={props.pergunta.question}
              checked={
                returnAnswer(props.pergunta.question, props.pergunta.no) ===
                String(props.pergunta.no)
                  ? true
                  : false
              }
            />
            <label
              className="form-check-label labelal mt-1"
              style={{ marginLeft: "35px" }}
            >
              {props.pergunta.no} = NÃO
            </label>
          </div>
        </Container>
      </p>
    </>
  );
}

export default QuestionsPsychological;
