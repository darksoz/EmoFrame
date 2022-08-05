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

  const returnAnswer = (id) => {
    if (props.answers.length != 0 && props.answers !== undefined) {
      let answer = props.answers.find((item) => item.id == id);
      console.log('asas',answer)
      if (answer !== undefined && answer !== null) {
        if (answer.answer !== null && answer.answer !== undefined) {
          console.log('   =>', answer.answer)
          return answer.answer;
        } else {
          return "false";
        }
      }
    } else {
      return "false";
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
        {props.pergunta.question == "94" && (
          <strong>Idade = {props.idade}</strong>
        )}
        {props.pergunta.question == "97" && (
          <strong>Pontuação = {props.incapacidade}</strong>
        )}
        {props.pergunta.question == "99" && (
          <strong>Pontuação = {props.teste}</strong>
        )}
        {props.pergunta.question == "102" && (
          <strong>Pontuação = {props.avc != undefined ? "sim" : "não"}</strong>
        )}
        {props.pergunta.question == "100" && (
          <strong>Pontuação = {props.comportamental}</strong>
        )}
        {props.pergunta.question == "104" && (
          <>
            <strong>{props.doencas}</strong>
          </>
        )}
        {props.pergunta.question == "95" && (
          <strong>Genero = {props.genero}</strong>
        )}
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
        {props.pergunta.question === 90 ? (
          ""
        ) : (
            <Container className="w-25 mt-4">
              <div className="form-check" style={{ minHeight: "2.0em" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  value={props.pergunta.yes}
                  name={props.pergunta.question}
                  checked={returnAnswer(props.pergunta.question) == props.pergunta.yes ? true : false}
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
                  checked={returnAnswer(props.pergunta.question) == props.pergunta.no ? true : false}
                />
                <label className="form-check-label labelal mt-1" style={{marginLeft:'5px'}}>
                  {props.pergunta.no} = NÃO
                </label>
              </div>
            </Container>
          
        )}
      </p>
    </>
  );
}
export default QuestionsMultidimensional;
