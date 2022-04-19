import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions1 } from "../../services/Questions/Page/Page";
import QuestionsPsychological from "./QuestionsPsychological";

function PsychologicalAspect() {
  return (
    <>
      <Container>
        <div id="passo" className="border border-dark bg-lblue text-white">
          <h3>Relacionados a Aspectos Psicológicos</h3>
        </div>

        {Questions1.map((question, index) => (
          <>
            <Container className="p-2" key={index}>
              <Card>
                <Row>
                  <p className="h4"> {question.aspectos}</p> <hr />
                  {question.instrucao && (
                    <p className="h3">
                      <strong>Instruções:</strong>
                      {question.instrucao}
                    </p>
                  )}
                </Row>
                <Row>
                  <Col md={12}>
                    {question.perguntas.map((pergunta, index) => (
                      <>
                        <QuestionsPsychological
                          pergunta={pergunta}
                          index={index}
                          key={index}
                        ></QuestionsPsychological>
                      </>
                    ))}
                  </Col>
                </Row>

                <Container className="w-75">
                  <Row className="border bg-lblue text-white">
                    <hr />

                    <Col md={6} className="m-auto">
                      <p className="h5">{question.pontucao}</p>
                    </Col>

                    <Col md={6}>
                      <p className="h5 mb-4">
                        <div
                          className="form-check"
                          style={{ minHeight: "1.5em" }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            value="SIM"
                            name={question.aspectos}
                          />
                          <label
                            className="form-check-label label-page-i"
                            for="flexCheckDefault"
                            name="SIM"
                          >
                            SIM
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input mt-3"
                            type="radio"
                            value="NÃO"
                            name={question.aspectos}
                          />
                          <label
                            className="form-check-label label-page-i l-no"
                            for="flexCheckDefault"
                            name="NÃO"
                          >
                            NÃO
                          </label>
                        </div>
                      </p>
                    </Col>
                  </Row>
                </Container>
                {index === Questions1.length - 1 && (
                <Row>
                  <div class="form-group justify-content-center mt-5">
                    <textarea
                      style={{ border: "1px solid black" }}
                      name="anotacao_aspectos_psicologicos"
                      class="form-control"
                      placeholder="Anotações:"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </Row>)
    }
              </Card>
            </Container>
          </>
        ))}
      </Container>
    </>
  );
}
export default PsychologicalAspect;
