import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions1 } from "../../../services/Questions/Page/Page";
import ImagesAspect from "../BiologicalAspect/ImagesAspect";
import InputText from "../../InputText/InputText";

function PsychologicalAspect() {
  const checkTextBox = (str) => {
    let textBox = ["7", "8", "41", "51", "54", "45", "88", "89"];
    return textBox.includes(String(str));
  };

  return (
    <>
      <div id="passo" className="border border-dark bg-primary text-white">
        <h3>Relacionados a Aspectos Psicológicos</h3>
      </div>

      {Questions1.map((question, index) => (
        <>
          <Container className="border border-dark mb-3">
            <Row>
              <Col xs={2} className="m-auto" key={index}>
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
                        {checkTextBox(pergunta.question) && (
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name={pergunta.question + "." + index}
                          ></textarea>
                        )}
                        <p className="h6">
                          <strong>{pergunta.text}</strong>
                        </p>
                        <div style={{ display: "grid" }}>
                          {pergunta.images?.length > 0
                            ? pergunta.images.map((image, index) => (
                                <ImagesAspect
                                  images={image}
                                  question={pergunta.question}
                                  name={index + 1}
                                  key={index}
                                ></ImagesAspect>
                              ))
                            : ""}
                        </div>
                      </Col>
                      <Col className="border">
                        <p className="h5">
                          <div
                            class="form-check"
                            style={{ minHeight: "2.0em" }}
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
                              {pergunta.yes} = SIM
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
                                {pergunta.no} = NÃO
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
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                      name="SIM"
                    >
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
                    <label
                      class="form-check-label"
                      for="flexCheckChecked"
                      name="NÃO"
                    >
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
            name="anotacao_aspectos_psicologicos"
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
export default PsychologicalAspect;