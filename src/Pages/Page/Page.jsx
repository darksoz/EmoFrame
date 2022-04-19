import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import PsychologicalAspect from "../../Components/PsychologicalAspect/PsychologicalAspect";
import BiologicalAspect from "../../Components/BiologicalAspect/BiologicalAspect";
import SocialAspect from "../../Components/SocialAspect/SocialAspect";
import MultidimensionalAspect from "../../Components/MultidimensionalAspect/MultidimensionalAspect";
import { MultiStepForm, Step } from "react-multi-form";
import { Link } from "react-scroll";
import { getUsername } from "../../services/auth";
import sortArray from "sort-array";
import { SavePageTest } from "../../services/api";
import RegisterPage from "../../Components/RegisterPage/RegisterPage";
import ModalTest from "../../Components/Modal/ModalTest";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


function Page() {
  const [active, setActive] = React.useState(1);
  const [answers, setAnswers] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [userFormData, setUserFormData] = React.useState([]);
  const [totalQuestions, setTotalQuestions] = React.useState(1);

  const handleChange = (event) => {
    const id = event.target.name;
    const data = { id, answer: event.target.value };
    if ( event.target.id ) {
      data.aspect = event.target.id;
    }

    if (answers.some((a) => a.id === id)) {
      setAnswers([...answers.filter((b) => b.id !== id), data]);
      console.log("data", data);
    } else {
      setAnswers([...answers, data]);
      console.log(data);
    }
  };
  const filterQuestionsByNumberInt = (questions) => {
    let data = [];
    if (questions) {
      data = questions.filter((item) => {
        return parseInt(item.id) == item.id;
      });
    }
    return data.sort((a, b) => a.id - b.id) || null;
  };
  useEffect(() => {
    let data = filterQuestionsByNumberInt(answers);
    setTotalQuestions(data.length);
  }, [answers]);
  
  

  const handleChangeForm = (event) => {
    const id = event.target.name;
    const data = { id, answer: event.target.value };
    if (userFormData.some((a) => a.id === id)) {
      setUserFormData([...userFormData.filter((b) => b.id !== id), data]);
    } else {
      setUserFormData([...userFormData, data]);
    }
  };
  const handleFormData = async () => {
    console.log('userFormData', answers);
    let json = {
      Datetime: new Date(Date.now()),
      Instrument: "page",
      Username: getUsername(),
      Questions: sortArray(answers, { by: "id" }),
      Evaluation: [],
      UserDataForm: userFormData,
    };
    console.log("Json", json);
    console.log("userFormData", userFormData);
    json = JSON.stringify(json);
    let response = await SavePageTest(json);
    if (response.status === 201) {
      console.log("Dados salvos aqui ==> ", response.data);
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
  console.log("Answers", answers);
  console.log('active',active)
  console.log('totalQuestions',totalQuestions)

  return (
    <>
      <Header/>
      <Breadcrumb>
        <Breadcrumb.Item href="./dashboard">Página Inicial</Breadcrumb.Item>
        <Breadcrumb.Item active>PAGE</Breadcrumb.Item>
      </Breadcrumb>
      <ModalTest Success={success} Title={title} Body={body} Reveal={show} Finish={"/dashboard"} Retry={true} />
      
      <Container>
        <div id="sample">
          <MultiStepForm activeStep={active}>
            <Step label="Dados de Identificação" onChange={handleChangeForm}>
              <RegisterPage />
            </Step>
            <Step label="Relacionados a Aspectos Psicológicos" onChange={handleChange}>
              <PsychologicalAspect />
            </Step>

            <Step label="Relacionados a Aspectos Biológicos" onChange={handleChange}>
              <BiologicalAspect />
            </Step>

            <Step label="Relacionados a Aspectos Sociais" onChange={handleChange}>
              <SocialAspect />
            </Step>

            <Step label="Domínio Multidimencional" onChange={handleChange}>
              <MultidimensionalAspect />
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
        {active === 2 && totalQuestions >= 19 && (
          <Link to="sample">
            <button
              class="btn whitebutton btn-lg"
              onClick={() => setActive(active + 1)}
            >
              Próximo
            </button>
          </Link>
        )}
        {active === 3 && totalQuestions  >= 52 && (
          <Link to="sample">
            <button
              class="btn whitebutton btn-lg"
              onClick={() => setActive(active + 1)}
            >
              Próximo
            </button>
          </Link>
        )}
        {active === 4 && totalQuestions  >= 85 && (
          <Link to="sample">
            <button
              class="btn whitebutton btn-lg"
              onClick={() => setActive(active + 1)}
            >
              Próximo
            </button>
          </Link>
        )}
        {active > 1 && active !== 5 && (
          <span>
            <Link to="sample">
              <button
               style={{marginLeft:"20px"}}
                class="btn whitebutton btn-lg"
                onClick={() => setActive(active - 1)}
              >
                Anterior
              </button>
            </Link>
            
          </span>
        )}
        {active === 5 && (
          <div>
            <Link to="sample">
              <button
                style={{marginRight:"20px"}}
                class="btn whitebutton btn-lg"
                onClick={() => setActive(active - 1)}
              >
                Anterior
              </button>
            </Link>
            {totalQuestions >= 102 && (
              <button
                class="btn whitebutton btn-lg"
                onClick={() => handleFormData()}
              >
                Salvar
              </button>
            )}
          </div>
        )}
      </Container>
      <Footer/>
    </>
  );
}
export default Page;
