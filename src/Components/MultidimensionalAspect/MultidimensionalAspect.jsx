import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../Pages/Page/Page.css";
import { Questions4 } from "../../services/Questions/Page/Page";
import QuestionsMultidimensional from "./QuestionsMultidimensional";

function MultidimensionalAspect(props) {
  let dominio = [
    
    {
      subAspectos: "QUEDAS",
      min: 83,
      max: 99,
    },
  ];

  const sumAnswers = (arr, min, max) => {
    let value = arr.slice(min, max);
    console.log("value", value);
    let sum = 0;

    if (value.length > 0) {
      value.forEach((element) => {
        sum += parseInt(element.answer);
      });
      return sum;
    }
  };

  const pontuacaoDominios = (dominio, answers, dominios) => {
    console.log("dominio", dominio, answers, dominios);
    let teste = dominios.find((item) => item.subAspectos == dominio);
    console.log("teste", sumAnswers(answers, teste.min, teste.max));
    return sumAnswers(answers, teste.min, teste.max);
  };

  return (
    <>
      <div className="border border-dark bg-purple text-white">
        <h3>Domínio Transversal</h3>
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

              <Container className="w-75">
                <Row className="border bg-secondary text-light fw-lighter">
                  <hr />
                  <Col md={6} className="m-auto">
                    <p className="h5">
                      {question.pontucao} = 
                      {pontuacaoDominios(
                        question.aspectos,
                        props.dados,
                        dominio
                      )}
                      Pontos
                    </p>
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
                          id="Multidimensional"
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
                          id="Multidimensional"
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
              {index === Questions4.length - 1 && (
                <Row>
                  <div class="form-group justify-content-center mt-5">
                    <textarea
                      style={{ border: "1px solid black" }}
                      name="anotacao_aspectos_multidimensionais"
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
    </>
  );
}
export default MultidimensionalAspect;
