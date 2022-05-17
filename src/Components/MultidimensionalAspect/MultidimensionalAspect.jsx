import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../Pages/Page/Page.css";
import { Questions4 } from "../../services/Questions/Page/Page";
import QuestionsMultidimensional from "./QuestionsMultidimensional";

function MultidimensionalAspect(props) {
  let idade,
    genero,
    totalIncapacidade,
    totalComportamental,
    avc,
    teste,
    doencas;
  let dominio = [
    {
      subAspectos: "QUEDAS",
      aspectos: [
        "88",
        "89",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "100",
        "101",
        "102",
        "103",
        "104",
      ],
      min: 83,
      max: 99,
    },
    {
      subAspectos: "INCAPACIDADE FUNCIONAL",
      aspectos: ["24", "25", "26", "27", "28", "29"],
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

  const retornaDados = (dados, idQuestao) => {
    let diagnostico = dados.find((item) => item.id == idQuestao);
    if (diagnostico != undefined) {
      diagnostico = diagnostico.answer;
      return diagnostico;
    }
  };

  if (props.userForm.length > 6) {
    idade = retornaDados(props.userForm, "idade");
    genero = retornaDados(props.userForm, "genero");
  }

  if (props.answers.length > 100) {
    totalIncapacidade = sumDominio(
      props.dados.filter((item) =>
        ["24", "25", "26", "27", "28", "29"].includes(item.id)
      )
    );
    totalComportamental = sumDominio(
      props.dados.filter((item) =>
        ["79","80","81"].includes(item.id)
      )
    );
    teste = sumDominio(
      props.dados.filter((item) =>
        ["72", "73", "74", "75", "76", "77", "78"].includes(item.id)
      )
    );
    doencas = props.answers
      .filter((item) =>
        [
          "44.11",
          "44.12",
          "44.13",
          "44.14",
          "44.15",
          "44.16",
          "44.17",
          "44.18",
          "44.19",
          "44.110",
          "44.111",
          "44.12",
          "45.11",
          "45.12",
          "45.13",
          "45.14",
          "45.15",
          "45.16",
          "45.17",
          "45.8",
        ].includes(item.id)
      )
      .map((item) => item.answer);
    avc = retornaDados(props.answers, "44.13");
  }
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
                        dados={props.dados}
                        idade={idade}
                        genero={genero}
                        incapacidade={totalIncapacidade}
                        comportamental={totalComportamental}
                        avc={avc}
                        teste={teste}
                        doencas={doencas}
                      ></QuestionsMultidimensional>
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
                          id="Multidimensional"
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
                          id="Multidimensional"
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
