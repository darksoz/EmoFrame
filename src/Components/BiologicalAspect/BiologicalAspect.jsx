import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions2 } from "../../services/Questions/Page/Page";
import QuestionsPage from "./QuestionsPage";

function BiologicalAspect(props) {
  let dominio = [
    {
      subAspectos: "DÉFICIT SENSORIAL",
      min: 19,
      max: 23,
    },
    {
      subAspectos: "INCAPACIDADE FUNCIONAL",
      min: 23,
      max: 29,
    },
    {
      subAspectos: "DESNUTRIÇÃO",
      min: 29,
      max: 35,
    },
    {
      subAspectos: "DOENÇAS CARDIOVASCULA-RES (DCV)",
      min: 35,
      max: 43,
    },
    {
      subAspectos: "USO INADEQUADO DE MEDICAMENTOS",
      min: 43,
      max: 52,
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
  const pontuacaoDominios = (dominio, answers, dominios) => {
    let teste = dominios.find(item=> item.subAspectos == dominio )
    return sumAnswers(answers, teste.min, teste.max);
  };
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
                        dadosQuestoes={props.dados}
                        respostas={props.data}
                      ></QuestionsPage>
                    </>
                  ))}
                </Col>
              </Row>

              <Container className="w-75">
                <Row className="border bg-secondary text-light fw-lighter">
                  <hr />
                  <Col md={6} className="m-auto">
                    <p className="h5">
                      {question.pontucao} -{" "}
                      {pontuacaoDominios(
                        question.aspectos,
                        props.dados,
                        dominio
                      )}
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
                          id="Biológico"
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
                          id="Biológico"
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
                </Row>
              )}
            </Card>
          </Container>
        </>
      ))}
    </>
  );
}
export default BiologicalAspect;
