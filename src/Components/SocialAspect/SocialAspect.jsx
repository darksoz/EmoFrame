import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Questions3 } from "../../services/Questions/Page/Page";
import QuestionsSocial from "./QuestionsSocial";

function SocialAspect(props) {
  let dominio = [
    {
      subAspectos: "BAIXO SUPORTE SOCIAL",
      aspectos:['55', '56', '57','58','59','60','61','62','63'],
      min: 52,
      max: 60,
    },
    {
      subAspectos: "VIOLÊNCIA",
      aspectos:['64','65', '66', '67', '68', '69', '70', '71'],
      min: 60,
      max: 68,
    },
    {
      subAspectos: "PROBLEMAS AMBIENTAIS",
      aspectos:['72', '73', '74', '75', '76', '77', '78', '79','80','81','82','83','84','85','86','87'],
      min: 68,
      max: 83,
    }
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
      console.log("item.aspect", item.id);
      return teste.aspectos.includes(item.id);
    });
    console.log("=>", answers);
    console.log("testearr", testearr);
    console.log("testes arary", teste.aspectos);
    console.log("soma", sumDominio(testearr));
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
      <div
        id="passo"
        className="border border-dark bg-lyellow text-white fw-lighter"
      >
        <h3>Relacionados a Aspectos Socioambientais</h3>
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
                <Row className="border bg-lgrey text-dark">
                  <hr />
                  <Col md={6} className="m-auto">
                    <p className="h5">
                    Pontuação (máxima = {question.pontucao}):{" "}
                        {pontuacaoDominios(
                          question.aspectos,
                          props.dados,
                          dominio
                        )}{" "}
                        Necessita de investigação?
                        {pontuacaoDom(question.aspectos, props.dados, dominio)}

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
                          id="Social"
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
                          id="Social"
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
              {index === Questions3.length - 1 && (
                <Row>
                  <div class="form-group justify-content-center mt-5">
                    <textarea
                      style={{ border: "1px solid black" }}
                      name="anotacao_aspectos_sociais"
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
export default SocialAspect;
