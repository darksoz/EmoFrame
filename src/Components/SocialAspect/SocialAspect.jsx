import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions3 } from "../../services/Questions/Page/Page";
import QuestionsSocial from "./QuestionsSocial";

function SocialAspect() {
  
  return (
    <>
      <div id="passo" className="border border-dark bg-lyellow text-white fw-lighter">
        <h3>Relacionados a Aspectos Sociais</h3>
      </div>
      {Questions3.map((question, index) => (
        <>
          <Container className="p-2">
            <Card>
              <Row>
                <p className="h4">{question.aspectos}</p>
                <hr />
                
              </Row>
              <Row>
                <Col md={12}>
                  {question.perguntas.map((pergunta, index) => (
                    <>
                      <QuestionsSocial
                        pergunta={pergunta}
                        index={index}
                        key={index}
                      ></QuestionsSocial>
                    </>
                  ))}
                </Col>
              </Row>

              <Container className="w-75">

              <Row className="border bg-lyellow text-white fw-lighter">
                <hr />
                <Col md={6} className="m-auto">
                  <p className="h5">{question.pontucao}</p>
                </Col>
                <Col md={6}>
                  <p className="h5 mb-4">
                    <div className="form-check" style={{ minHeight: "1.5em" }}>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="SIM"
                        name={question.aspectos}
                        id='Social'
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
                        id='Social'
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
              { index === Questions3.length - 1 && (
              <Row>
                <div class="form-group justify-content-center mt-5">
                  <textarea
                    style={{ border: "1px solid black" }}
                    name="anotacao_aspectos_sociais"
                    class="form-control"
                    placeholder="Anotações:"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </Row>
              )}
            </Card>
          </Container>
        </>
      ))}

    </>
  );
}
export default SocialAspect;