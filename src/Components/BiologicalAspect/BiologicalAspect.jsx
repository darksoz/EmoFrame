import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions2 } from "../../services/Questions/Page/Page";
import QuestionsPage from "./QuestionsPage";

function BiologicalAspect(props) {
  let dominio = [
    {
      subAspectos: "DÉFICIT SENSORIAL",
      aspectos: ["20", "21", "22", "23"],
      min: 19,
      max: 23,
    },
    {
      subAspectos: "INCAPACIDADE FUNCIONAL",
      aspectos: ["24", "25", "26", "27", "28", "29"],
      min: 23,
      max: 29,
    },
    {
      subAspectos: "DESNUTRIÇÃO",
      aspectos: ["30", "31", "32", "33", "34", "35"],
      min: 29,
      max: 35,
    },
    {
      subAspectos: "DOENÇAS CARDIOVASCULA-RES (DCV)",
      aspectos: ["36", "37", "38", "39", "40", "41", "42", "43"],
      min: 35,
      max: 43,
    },
    {
      subAspectos: "USO INADEQUADO DE MEDICAMENTOS",
      aspectos: [
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
      ],
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
                          id="Biológico"
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
                          id="Biológico"
                        />
                        <label
                          className="form-check-label mt-3 labelal"
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
