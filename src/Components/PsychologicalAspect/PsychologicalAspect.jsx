import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions1 } from "../../services/Questions/Page/Page";
import QuestionsPsychological from "./QuestionsPsychological";

function PsychologicalAspect(props) {
  let dominio = [
    {
      subAspectos: "DÉFICIT COGNITIVO",
      aspectos: ["1", "2", "3", "4", "5", "6"],
      min: 0,
      max: 6,
    },
    {
      subAspectos: "ATITUDE NEGATIVA EM RELAÇÃO AO ENVELHECIMENTO",
      aspectos: ["7", "8", "9", "10", "11", "12", "13", "14"],
      min: 6,
      max: 14,
    },
    {
      subAspectos: "DEPRESSÃO",
      aspectos: ["15", "16","17", "18", "19"],
      min: 14,
      max: 19,
    },
  ];

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

  const sumDominio = (arr) => {
    let sum = 0;
    if (arr.length > 0) {
      arr.forEach((element) => {
        sum += parseInt(element.answer);
      });
      return sum;
    }
  };

  const pontuacaoDominios = (dominio, answers, dominios) => {
    let teste = dominios.find((item) => item.subAspectos == dominio);
    let testearr = answers.filter((item) => {
      return teste.aspectos.includes(item.id);
    });
    return sumAnswers(answers, teste.min, teste.max);
  };
  const pontuacaoDom = (dominio, answers, dominios) => {
    let teste = dominios.find((item) => item.subAspectos == dominio);
    let testearr = answers.filter((item) => {
      return teste.aspectos.includes(item.id);
    });

    return sumDominio(testearr);
  };

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
                  <Row className="border bg-secondary text-light fw-lighter">
                    <hr />

                    <Col md={9} className="m-auto">
                      <p className="h5">
                        Pontuação (máxima = {question.pontucao}):{" "}
                        {pontuacaoDom(question.aspectos, props.dados, dominio)}{" "}
                        Necessita de investigação?
                       
                      </p>
                    </Col>

                    <Col sm={3}>
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
                            id="Psicológico"
                          />
                          <label
                            className="form-check-label labelal"
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
                            id="Psicológico"
                          />
                          <label
                            className="form-check-label labelal mt-3"
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
                        rows="3"
                      ></textarea>
                    </div>
                  </Row>
                )}
              </Card>
            </Container>
          </>
        ))}
      </Container>
    </>
  );
}
export default PsychologicalAspect;
