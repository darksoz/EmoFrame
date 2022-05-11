import { React } from "react";
import { Container } from "react-bootstrap";
import InputText from "../InputText/InputText";

function QuestionsSocial(props) {
  const checkTextBox = (str) => {
    let textBox = ["7", "8", "41", "51", "54", "45", "88", "89"];
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
        ):''

        }
        <strong>
          {props.pergunta.questions?.map((a, index) => (
            <>
              <label> {a}</label>
              <input
                type="checkbox"
                value={a}
                name={props.pergunta.question + "." + (index + 1)}
                key={index}
              ></input>
              <br></br>
            </>
          ))}
        </strong>
        {checkTextBox(props.pergunta.question) && (
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name={`${props.pergunta.question}.7`}
          ></textarea>
        )}
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
      </p>
    </>
  );
}

export default QuestionsSocial;

