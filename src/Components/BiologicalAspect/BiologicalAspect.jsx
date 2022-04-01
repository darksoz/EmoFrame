import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions2 } from "../../services/Questions/Page/Page";
import QuestionsPage from "./QuestionsPage";

function BiologicalAspect() {
  return (
    <>
      <div id="passo" className="border border-dark bg-success text-white">
        <h3>Relacionados a Aspectos Biológicos</h3>
      </div>
      {Questions2.map((question, index) => (
        <>
          <Container className="p-2" key={index}>
            <Card>
              <Row>
                <p className="h4"> {question.aspectos}</p> <hr />
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
