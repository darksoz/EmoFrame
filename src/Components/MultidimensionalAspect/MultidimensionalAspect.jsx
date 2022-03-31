import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../Pages/Page/Page.css";
import { Questions4 } from "../../services/Questions/Page/Page";
import InputText from "../InputText/InputText";

function MultidimensionalAspect() {
  return (
    <>
      <div className="border border-dark bg-purple text-white">
        <h3>Domínio Multidimensional</h3>
      </div>
      {Questions4.map((question, index) => (
        <>
          <Container className="border border-dark mb-3">
            <Row>
              <Col xs={2} className="m-auto">
                <p className="h5"> {question.aspectos}</p>
              </Col>
              <Col xs={8}>
                {question.perguntas.map((pergunta, index) => (
                  <>
                    <Row>
                      <Col className="border">
                        {pergunta.input ? (
                          <InputText
                            text={pergunta.title}
                            question={pergunta.question}
                          />
                        ) : (
                          <p className="h5">
                            {pergunta.question} - {pergunta.title}
                          </p>
                        )}
                      </Col>
                      <Col className="border">
                        <p className="h5">
                          <div
                            class="form-check"
                            style={{ minHeight: "1.5em" }}
                          >
                            <input
                              class="form-check-input"
                              type="radio"
                              value={pergunta.yes}
                              name={pergunta.question}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              SIM
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              value={pergunta.no}
                              name={pergunta.question}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              NÃO
                            </label>
                          </div>
                        </p>
                      </Col>
                    </Row>
                  </>
                ))}
              </Col>
              <Col xs={2} className="m-auto">
                <p className="h5">{question.pontucao}</p>

                <p className="h5"></p>

                <p className="h5">
                  <div class="form-check" style={{ minHeight: "1.5em" }}>
                    <input
                      class="form-check-input"
                      type="radio"
                      value="SIM"
                      name={question.aspectos}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      SIM
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="NÃO"
                      name={question.aspectos}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      NÃO
                    </label>
                  </div>
                </p>
              </Col>
            </Row>
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
