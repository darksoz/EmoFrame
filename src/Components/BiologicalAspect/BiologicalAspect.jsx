import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions2 } from "../../services/Questions/Page/Page";
import InputText from "../InputText/InputText";
import TableDiagnostico from "./TableDiagnostico";
import { TextareaAutosize } from "@material-ui/core";

function BiologicalAspect() {
  const checkTextBox = (str) => {
    let textBox = ["7", "8", "41", "51", "54", "45", "88", "89"];
    return textBox.includes(String(str));
  };
  console.log(checkTextBox("10"));
  return (
    <>
      <div id="passo" className="border border-dark bg-success text-white">
        <h3>Relacionados a Aspectos Biológicos</h3>
      </div>
      {Questions2.map((question, index) => (
        <>
        <Container className="p-2">

          <Card>

          <Row>
          <p className="h4"> {question.aspectos}</p> <hr/>
          </Row>

          <Row>
            <Col md={12}>
            {question.perguntas.map((pergunta, index) => (
              <>
              {pergunta.input ? (
                          <InputText
                            text={pergunta.title}
                            question={pergunta.question}
                            value={pergunta.point === true ? "imc" : ""}
                          />
                        ) : (
                          
                          <p className="h5 mb-3 mt-3 border p-4">
                            {pergunta.question} - {pergunta.title}
                          <p className="h5 mb-3 mt-3 p-1">
                          <Container className="ml-5">
                          <div
                            className="form-check"
                            style={{ minHeight: "2.0em" }}
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              value={pergunta.yes}
                              name={pergunta.question}
                            />
                            <label className="form-check-label">
                              {pergunta.yes} = SIM
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value={pergunta.no}
                              name={pergunta.question}
                            />
                            <label className="form-check-label">
                              {pergunta.no} = NÃO
                            </label>
                          </div>
                          </Container>
                        </p>
                          </p>
                        )}
                        {checkTextBox(pergunta.question) && (
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name={pergunta.question + "." + index}
                          ></textarea>
                        )}
                        <p className="h6">
                          <strong>
                            {pergunta.questions?.map((a, index) => (
                              <>
                                <label> {a}</label>
                                <input
                                  type="checkbox"
                                  value={a}
                                  name={pergunta.question + "." + (index + 1)}
                                ></input>
                                <br></br>
                              </>
                            ))}
                          </strong>
                        </p>
              </>
               ))}
            </Col>

          
          </Row>
          

          <Row>

            <hr/>
          <Col md={6} className="m-auto">
                <p className="h5">{question.pontucao}</p>
          </Col>

          <Col md={6}>
          <p className="h5">
                  <div className="form-check" style={{ minHeight: "1.5em" }}>
                    <input
                      className="form-check-input"
                      type="radio"
                      value="SIM"
                      name={question.aspectos}
                    />
                    <label
                      className="form-check-label"
                      for="flexCheckDefault"
                      name="SIM"
                    >
                      SIM
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="NÃO"
                      name={question.aspectos}
                    />
                    <label
                      className="form-check-label"
                      for="flexCheckDefault"
                      name="NÃO"
                    >
                      NÃO
                    </label>
                  </div>
                </p>
          </Col>

          </Row>


          </Card>
        </Container>
         
        </>
      ))}

      <Row>
        <div className="form-group justify-content-center">
          <textarea
            style={{ border: "1px solid black" }}
            name="anotacao_aspectos_biologicos"
            className="form-control"
            placeholder="Anotações:"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </Row>
    </>
  );
}
export default BiologicalAspect;
