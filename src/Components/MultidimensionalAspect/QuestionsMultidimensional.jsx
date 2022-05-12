import { React } from "react";
import { Container } from "react-bootstrap";
import InputText from "../InputText/InputText";

function QuestionsMultidimensional(props) {
  const checkTextBox = (str) => {
    let textBox = ["90"];
    return textBox.includes(String(str));
  };
  const dependencia = (arr, str) => {
    let tam = Object.keys(arr).length;
    if (tam > parseInt(str)) {
      let value = arr.find((item) => item.id == str);
      if (value != undefined) {
        return value.answer == "1" ? "Pontuou" : "Não Pontuou";
      }
    }
  };

  const sumAnswers = (arr, min, max) => {
    let value = arr.slice(min, max);
    let sum = 0;

    if (value.length > 0) {
      value.forEach((element) => {
        sum += parseInt(element.answer);
      });
      return sum;
    }
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
            {props.pergunta.dependente != null
              ? dependencia(props.dados, props.pergunta.dependente)
              : ""}
          </strong>
        ) : (
          ""
        )}
        {props.pergunta.question == "94" && <strong>{props.idade}</strong>}
        {props.pergunta.question == "97" && (
          <strong>{props.incapacidade}</strong>
        )}
        {props.pergunta.question == "99" && (
          <strong>{props.incapacidade}</strong>
        )}
        {props.pergunta.question == "102" && <strong>{props.avc}</strong>}
        {props.pergunta.question == "100" && (
          <strong>{props.comportamental}</strong>
        )}
        {props.pergunta.question == "104" && (
          <strong>{props.incapacidade}</strong>
        )}
        {props.pergunta.question == "95" && <strong>{props.genero}</strong>}
        <strong>
          {props.pergunta.questions?.map((a, index) => (
            <>
              <label> {a}</label>
              <input
                type="checkbox"
                value={a}
                name={props.pergunta.question + "." + (index + 1)}
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
export default QuestionsMultidimensional;
