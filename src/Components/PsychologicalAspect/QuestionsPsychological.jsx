import { React } from "react";
import { Container } from "react-bootstrap";
import InputText from "../InputText/InputText";
import ImagesAspect from "../BiologicalAspect/ImagesAspect";
import { Checkbox } from "@mui/material";

function QuestionsPsychological(props) {
  const checkTextBox = (str) => {
    let textBox = ["8", "46"];
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
                <Checkbox name={text}></Checkbox>
              </li>
            ))}
          </ul>
        )}
        
        {props.pergunta.question === 6 && (
          <ul style={{ listStyleType: "none" }}>
            {props.pergunta.text?.map((text, index) => (
              <li key={text} name="text">
                <strong>{text}</strong>
                <Checkbox name={text}></Checkbox>
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
                  <Checkbox name={"4"+".1"+text}></Checkbox>
                </li>
              ))}
            </ul>
          </>
        )}
        {props.pergunta.question === 4 && (
          <>
            <p>Ponteiro correto na hora <Checkbox name={"4.2"}></Checkbox></p>

                  
             
          </>
        )}
        {props.pergunta.question === 4 && (
          <>
            <p>Ponteiro correto nos minutos <Checkbox name={"4.3"}></Checkbox></p>
                  
          
          </>
        )}

        {props.pergunta.question === 4 && (
          <p>
            Pontuação Total <input name="4.7"></input>
          </p>
        )}
        {props.pergunta.images?.length > 0
          ? props.pergunta.images.map((image, index) => (
              <ImagesAspect
                images={image}
                question={props.pergunta.question}
                name={index + 1}
                key={index}
              ></ImagesAspect>
            ))
          : ""}
        {props.pergunta.question === 3 && (
          <p>Pontuação Total <input type="text" name="3.7" /></p>
        )}
        {checkTextBox(props.pergunta.question) && (
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name={`${props.pergunta.question}.7`}
          ></textarea>
        )}

        <Container className="w-25 mt-4">
          <div className="form-check" style={{ minHeight: "2.0em" }}>
            <input
              className="form-check-input"
              type="radio"
              value={props.pergunta.yes}
              name={props.pergunta.question}
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
