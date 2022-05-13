import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../Pages/Page/Page.css";
import { Questions4 } from "../../services/Questions/Page/Page";
import QuestionsMultidimensional from "./QuestionsMultidimensional";

function MultidimensionalAspect(props) {
  let idade, genero, totalIncapacidade, totalComportamental, avc;
  let dominio = [
    {
      subAspectos: "QUEDAS",
      aspectos:['88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104'],
      min: 83,
      max: 99,
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

  const retornaDados = (dados, idQuestao) => {

    let diagnostico = dados.find((item) => item.id == idQuestao);
    if (diagnostico != undefined) {
      diagnostico = diagnostico.answer;
      return diagnostico;
    }
  };

  if (props.userForm.length > 10) {
    idade = retornaDados(props.userForm, "idade");
    genero = retornaDados(props.userForm, "genero");
  }
  console.log("answers", props.answers);
  console.log('dados', props.dados);

  if (props.answers.length > 100) {
    console.log("entrei no if");
    console.log("incapacidade", sumAnswers(props.dados, 23, 29));
    totalIncapacidade = sumAnswers(props.dados, 23, 29);
    totalComportamental = sumAnswers(props.dados, 72, 78);
    avc = retornaDados(props.answers, "44.3");
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
