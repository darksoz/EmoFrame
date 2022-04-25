import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions2 } from "../../services/Questions/Page/Page";
import QuestionsPage from "./QuestionsPage";

function BiologicalAspect() {
  return (
    <>
      <div id="passo" className="border border-dark bg-lgreen text-white">
        <h3>Relacionados a Aspectos Biológicos</h3>
      </div>
      {Questions2.map((question, index) => (
        <>
          <Container className="p-2" key={index}>
            <Card>
              <Row>
                <p className="h4"> {question.aspectos}</p> <hr />
                {question.instrucao && (
                  <p className="h3">{question.instrucao}</p>
                )}
              </Row>

              <Row>
                <Col md={12}>
                  {question.perguntas.map((pergunta, index) => (
                    <>
                      <QuestionsPage
                        pergunta={pergunta}
                        index={index}
                        key={index}
                      ></QuestionsPage>
                    </>
                  ))}
                </Col>
              </Row>

              <Container className="w-75">
                <Row className="border bg-lgreen text-white">
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
                          id='Biológico'
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
                          id='Biológico'
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
              {index === Questions2.length - 1 && (
                <Row>
                  <div class="form-group justify-content-center mt-5">
                    <textarea
                      style={{ border: "1px solid black" }}
                      name="anotacao_aspectos_biologicos"
                      class="form-control"
                      placeholder="Anotações:"
                      rows="3"
                    ></textarea>
                  </div>
                </Row>)
    }
            </Card>
            
          </Container>
        </>
      ))}
    </>
  );
}
export default BiologicalAspect;
