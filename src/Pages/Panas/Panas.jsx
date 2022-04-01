import React from "react";
import "./Panas.css";
import Container from "react-bootstrap/Container";
import { Breadcrumb } from "react-bootstrap";
import PanasExample from "../../Components/PanasExample/PanasExample";
import PanasForm from "../../Components/PanasForm/PanasForm";
import arrayShuffle from "array-shuffle";
import { Questions1 } from "../../services/Questions/Panas/Panas.js";
import { Questions2 } from "../../services/Questions/Panas/Panas.js";
import { MultiStepForm, Step } from "react-multi-form";
import { Link } from "react-scroll";
import sortArray from "sort-array";
import { getUsername } from "../../services/auth";
import { SaveTest } from "../../services/api";
import ModalTest from "../../Components/Modal/ModalTest";
import Footer from "../../Components/Footer/Footer";

let firstQuestions = arrayShuffle(Questions1);
let secondQuestions = arrayShuffle(Questions2);
let amountOfQuestions = firstQuestions.length + secondQuestions.length;

function Panas() {
  const [active, setActive] = React.useState(1);
  const [answers, setAnswers] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleChange = (event) => {
    const id = parseInt(event.target.name);
    const data = { id, answer: event.target.value };

    if (answers.some((a) => a.id === id)) {
      setAnswers([...answers.filter((b) => b.id !== id), data]);
    } else {
      setAnswers([...answers, data]);
    }
  };

  const handleFormData = async () => {
    let json = {
      Datetime: new Date(Date.now()),
      Instrument: "panas",
      Username: getUsername(),
      Questions: sortArray(answers, { by: "id" }),
    };
    json = JSON.stringify(json);
    let response = await SaveTest(json, "panas");
    if (response.status === 201) {
      setTitle("Teste concluído");
      setBody("Atividade realizada com sucesso");
      setSuccess(true);
      setShow(true);
    } else {
      setTitle("Erro na conclusão");
      setBody("Atividade não foi concluída");
      setSuccess(false);
    }
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="./dashboard">Página Inicial</Breadcrumb.Item>
        <Breadcrumb.Item active>Panas</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <ModalTest
          Success={success}
          Title={title}
          Body={body}
          Reveal={show}
          Finish={"/dashboard"}
          Retry={true}
        />
        <PanasExample />

        <div id="sample" onChange={handleChange}>
          <MultiStepForm activeStep={active}>
            <Step label="Passo 1">
              {firstQuestions.map((content, index) => (
                <>
                  <div
                    style={{
                      marginBottom: "20px",
                    }}
                  >
                    <PanasForm Title={content.Title} Name={content.Name} />
                    <hr></hr>
                  </div>
                </>
              ))}
            </Step>

            <Step label="Passo 2">
              {secondQuestions.map((content, index) => (
                <>
                  <div
                    style={{
                      marginBottom: "20px",
                    }}
                  >
                    <PanasForm Title={content.Title} Name={content.Name} />
                    <hr></hr>
                  </div>
                </>
              ))}
            </Step>
          </MultiStepForm>
        </div>

        {active === 1 && (
          <Link to="sample">
            <button
              class="btn whitebutton btn-lg"
              onClick={() => setActive(active + 1)}
            >
              Próximo
            </button>
          </Link>
        )}
        {active > 1 && active !== 2 && (
          <div>
            <Link to="sample">
              <button
                class="btn whitebutton btn-lg"
                onClick={() => setActive(active - 1)}
              >
                Anterior
              </button>
            </Link>
            <Link to="sample">
              <button
                class="btn whitebutton btn-lg"
                onClick={() => setActive(active + 1)}
              >
                Próximo
              </button>
            </Link>
          </div>
        )}
        {active === 2 && answers.length === amountOfQuestions && (
          <div>
            <Link to="sample">
              <button
                class="btn whitebutton btn-lg"
                onClick={() => setActive(active - 1)}
              >
                Anterior
              </button>
            </Link>
            <button
              class="btn whitebutton btn-lg"
              onClick={() => handleFormData()}
            >
              Salvar
            </button>
          </div>
        )}
        {active === 2 && answers.length !== amountOfQuestions && (
          <div>
            <Link to="sample">
              <button
                class="btn whitebutton btn-lg"
                onClick={() => setActive(active - 1)}
              >
                Anterior
              </button>
            </Link>
          </div>
        )}
      </Container>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Panas;
