import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../Pages/Page/Page.css";
import { Questions4 } from "../../services/Questions/Page/Page";
import QuestionsMultidimensional from "./QuestionsMultidimensional";

function MultidimensionalAspect() {
  return (
    <>
      <div className="border border-dark bg-purple text-white">
        <h3>Domínio Multidimensional</h3>
      </div>
      {Questions4.map((question, index) => (
        <>
          <Container className="p-2">
            <Card>
              <Row>
                <p className="h4"> {question.aspectos}</p> <hr />
              </Row>

              <Row>
                <Col md={12}>
                  {question.perguntas.map((pergunta, index) => (
                    <>
                      <QuestionsMultidimensional
                        pergunta={pergunta}
                        index={index}
                        key={index}
                      ></QuestionsMultidimensional>
                    </>
                  ))}
                </Col>
              </Row>

              <Row>
                <hr />
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
        <div class="form-group justify-content-center">
          <textarea
            style={{ border: "1px solid black" }}
            name="anotacao_aspectos_multidimensionais"
            class="form-control"
            placeholder="Anotações:"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </Row>
    </>
  );
}
export default MultidimensionalAspect;
