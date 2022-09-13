import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import PsychologicalAspect from "../../Components/PsychologicalAspect/PsychologicalAspect";
import BiologicalAspect from "../../Components/BiologicalAspect/BiologicalAspect";
import SocialAspect from "../../Components/SocialAspect/SocialAspect";
import MultidimensionalAspect from "../../Components/MultidimensionalAspect/MultidimensionalAspect";
import { MultiStepForm, Step } from "react-multi-form";
import { Link } from "react-scroll";
import sortArray from "sort-array";
import { SavePageTest, SavePageResult } from "../../services/api";
import RegisterPage from "../../Components/RegisterPage/RegisterPage";
import ModalTest from "../../Components/Modal/ModalTest";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Demandas } from "../../services/Questions/Page/Page";
import { GetPageAmountOfResult, GetResultTestById } from "../../services/api";
import { useParams } from "react-router-dom";

function Page() {
  const [active, setActive] = React.useState(1);
  const [answers, setAnswers] = React.useState([]);
  const [investigation, setInvestigation] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [userFormData, setUserFormData] = React.useState([]);
  const [totalQuestions, setTotalQuestions] = React.useState(1);
  const [data, setData] = React.useState([]);
  const { id } = useParams();

  const userForm = [
    "entrevistador",
    "entrevistador",
    "entrevistado",
    "Entrada",
    "dataAvaliação",
    "Instituição",
    "Id",
    "genero",
    "idade",
  ];

  const handleChange = (event) => {
    const id = event.target.name;
    const data = { id, answer: event.target.value };
    if (event.target.id) {
      data.aspect = event.target.id;
    }
    if (
      answers.some((a) => {
        return a.id === id;
      })
    ) {
      setAnswers([...answers.filter((b) => b.id !== id), data]);
    } else {
      setAnswers([...answers, data]);
    }
  };

  const verifyDemandas = (demanda, arr2) => {
    if (arr2.length !== 0) {
      let difference = Demandas[demanda].filter((x) => !arr2.includes(x));
      if (difference.length !== 0) {
        alert("Você não respondeu todas as perguntas da demanda " + difference);
        setInvestigation([]);
      }
    } else {
      alert(
        "Você não respondeu nenhuma pergunta da demanda " + Demandas[demanda]
      );
      setInvestigation([]);
    }
  };
  const verifyForm = (userForm, arr) => {
    if (arr.length !== 0) {
      let difference = userForm.filter((x) => !arr.includes(x));
      if (difference.length !== 0) {
        alert(
          "Você não respondeu todas as perguntas do formulário: " + difference
        );
        setInvestigation([]);
      }
    } else {
      alert("Você não respondeu nenhuma pergunta da demanda " + userForm);
      setInvestigation([]);
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
  const filterQuestionsByString = (questions) => {
    let data = [];

    if (questions) {
      data = questions.filter((item) => {
        return +item.id != item.id;
      });
    }
    return data.sort((a, b) => a.id - b.id).map((item) => item.id);
  };
  useEffect(() => {
    let data = filterQuestionsByNumberInt(answers);
    let dataI = filterQuestionsByString(answers);
    setData(data);
    setInvestigation(dataI);
    setTotalQuestions(data.length);
  }, [answers, userFormData]);

  const handleChangeForm = (event) => {
    const id = event.target.name;
    const data = { id, answer: event.target.value };
    if (userFormData.some((a) => a.id === id)) {
      setUserFormData([...userFormData.filter((b) => b.id !== id), data]);
    } else {
      setUserFormData([...userFormData, data]);
    }
  };

  useEffect(() => {
    const getResult = async () => {
      if (id !== undefined) {
        let response = await GetResultTestById("page", id);
        console.log("response", response);
        if (response.status === 200) {
          let data = response.data;
          if (data === "") {
            setTitle("Resultado não encontrado");
            setBody(
              "Não há nenhum registro encontrado no banco de dados com o identificador repassado"
            );
            setShow(true);
          } else {
            setUserFormData(data.UserDataForm);
            setAnswers(data.Questions);
          
            let userId = data.UserDataForm.filter((a) => a.id === "Id")[0]
              .answer;
            if (userId) {
              let response = await GetPageAmountOfResult(userId);

              let arrayId = response.data.sort(function (a, b) {
                var c = new Date(a.Datetime);
                var d = new Date(b.Datetime);
                return c - d;
              });
              
            }
          }
        } else {
          setTitle("Erro ao carregar a resposta");
          setBody("Não foi possível carregar a resposta do banco de dados");
          setShow(true);
        }
      } else {
      }
    };
    getResult();
  }, [id]);

  const handleFormData = async () => {
    let name = userFormData.filter((a) => a.id === "nomepage")[0];
    let json = {
      Datetime: new Date(Date.now()),
      Instrument: "page",
      Username: `${name.answer}`,
      Questions: sortArray(answers, { by: "id" }),
      Evaluation: [],
      UserDataForm: userFormData,
    };

    json = JSON.stringify(json);
    let response = await SavePageTest(json);
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

  const handleFormDataPut = async () => {
    let json = {
      Questions: sortArray(answers, { by: "id" }),
      UserDataForm: userFormData,
    };
    json = JSON.stringify(json);
    let response = await SavePageResult(json, id);
    if (response.status === 200) {
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
      <Header />
      <Breadcrumb>
        <Breadcrumb.Item href="./dashboard" style={{ marginLeft: "12px" }}>
          Página Inicial
        </Breadcrumb.Item>
        <Breadcrumb.Item active>PAGe</Breadcrumb.Item>
      </Breadcrumb>
      <ModalTest
        Success={success}
        Title={title}
        Body={body}
        Reveal={show}
        Finish={"/dashboard"}
        Retry={true}
      />

      <Container>
        <div id="sample">
          <MultiStepForm activeStep={active}>
            <Step label="Dados de Identificação" onChange={handleChangeForm}>
              <RegisterPage userData={userFormData} />
            </Step>
            <Step label="Aspectos Psicológicos" onChange={handleChange}>
              <PsychologicalAspect dados={data} answers={answers} />
            </Step>

            <Step label="Aspectos Biológicos" onChange={handleChange}>
              <BiologicalAspect dados={data} data={answers} />
            </Step>

            <Step label="Aspectos Socioambientais" onChange={handleChange}>
              <SocialAspect dados={data} answers={answers} />
            </Step>

            <Step label="Domínio Multidimencional" onChange={handleChange}>
              <MultidimensionalAspect
                dados={data}
                userForm={userFormData}
                answers={answers}
              />
            </Step>
          </MultiStepForm>
        </div>
        {active > 1 && active !== 5 && (
          <span>
            <Link to="sample">
              <button
                style={{ marginRight: "10px" }}
                class="btn whitebutton btn-lg"
                onClick={() => setActive(active - 1)}
              >
                Anterior
              </button>
            </Link>
          </span>
        )}
        {active === 1 && (
          <Link to="sample">
            <button
              class="btn whitebutton btn-lg"
              onClick={() => setActive(active + 1)}
              onMouseOver={() =>
                verifyForm(userForm, filterQuestionsByString(userFormData))
              }
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
              onMouseOver={() => verifyDemandas("psicologicos", investigation)}
            >
              Próximo
            </button>
          </Link>
        )}
        {active === 3 && totalQuestions >= 52 && (
          <Link to="sample">
            <button
              class="btn whitebutton btn-lg"
              onClick={() => setActive(active + 1)}
              onMouseOver={() => verifyDemandas("biologicos", investigation)}
            >
              Próximo
            </button>
          </Link>
        )}
        {active === 4 && totalQuestions >= 83 && (
          <Link to="sample">
            <button
              class="btn whitebutton btn-lg"
              onClick={() => setActive(active + 1)}
              onMouseOver={() => verifyDemandas("sociais", investigation)}
            >
              Próximo
            </button>
          </Link>
        )}

        {active === 5 && (
          <div>
            <Link to="sample">
              <button
                style={{ marginRight: "20px" }}
                class="btn whitebutton btn-lg"
                onClick={() => setActive(active - 1)}
              >
                Anterior
              </button>
            </Link>
            {id === undefined && (
               <>
              {totalQuestions >= 99 && (
               
                  <button
                    class="btn whitebutton btn-lg"
                    onClick={() => handleFormData()}
                    onMouseOver={() =>
                      verifyDemandas("multidimensionais", investigation)
                   }
                  >
                  Salvar
                </button>
                
                )}
                </>
            )}
            
          </div>
        )}
        <br/>
        {id !== undefined && (
          <button
            style={{ marginTop: "10px" }}
            class="btn whitebutton btn-lg"
            onClick={() => handleFormDataPut()}
            
          >
            Salvar Novamente
          </button>
        )}
        {id === undefined && (
          <button
            style={{ marginTop: "10px" }}
            class="btn whitebutton btn-lg"
            onClick={() => handleFormData()}
          >
            Finalizar depois
          </button>
        )}
      </Container>
      <Footer />
    </>
  );
}
export default Page;
