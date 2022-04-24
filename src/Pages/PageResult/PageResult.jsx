import { Button, Container, Modal } from "react-bootstrap";
import PageResultTable from "../../Components/PageResultTable/PageResultTable";
import GerontologistAssessment from "../../Components/GerontologistAssessment/GerontologistAssessment";
import ActionPlanning from "../../Components/ActionPlanning/ActionPlanning";
import ActionsImplementation from "../../Components/ActionsImplementation/ActionsImplementation";
import ActionsControl from "../../Components/ActionsControl/ActionsControl";
import DemandsMap from "../../Components/DemandsMap/DemandsMap";
import { Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GetResultTestById } from "../../services/api";
import { useParams, useHistory } from "react-router-dom";
import { formateDateTime } from "../../services/utils";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageNotesTable from "../../Components/PageNotesTable/PageNotesTable";
import PageInvestigationTable from "../../Components/PageInvestigationTable/PageInvestigationTable";
import ModalTest from "../../Components/Modal/ModalTest";
import sortArray from "sort-array";
import { SavePageResult } from "../../services/api";



function PageResult() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [evaluation, setEvaluation] = useState([]);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [dataUser, setDataUser] = useState({});
  const { id } = useParams();
  let history = useHistory();

  const handleChangeForm = (event) => {
    const id = event.target.name;
    const data = { id, answer: event.target.value };
    if (evaluation.some((a) => a.id === id)) {
      console.log(data);
      setEvaluation([...evaluation.filter((b) => b.id !== id), data]);
    } else {
      setEvaluation([...evaluation, data]);
    }
  };

  useEffect(() => {
    const getResult = async () => {
      if (id !== undefined) {
        let response = await GetResultTestById("page", id);
        if (response.status === 200) {
          let data = response.data;
          if (data === "") {
            setTitle("Resultado não encontrado");
            setBody(
              "Não há nenhum registro encontrado no banco de dados com o identificador repassado"
            );
            setShow(true);
          } else {
            setDataUser(data);
            setEvaluation(data.Evaluation);
            setQuestions(data.Questions);
            setName(data.Username);
            setDatetime(data.Datetime);
          }
        } else {
          setTitle("Erro ao carregar a resposta");
          setBody("Não foi possível carregar a resposta do banco de dados");
          setShow(true);
        }
      } else {
        setTitle("Erro ao carregar a resposta");
        setBody("É necessário realizar uma busca com um identificador válido");
        setShow(true);
      }
    };
    getResult();
  }, [id]);
  
  console.log('dataUser',dataUser);

  const handleFormData = async () => {
    let json = {
      Datetime: dataUser.Datetime,
      Instrument: dataUser.Instrument,
      Username: dataUser.Username,
      Questions: dataUser.Questions,
      Evaluation: evaluation,
      UserDataForm: dataUser.UserDataForm,
    };
    json = JSON.stringify(json);
    console.log('json', json);
    let response = await SavePageResult(json, id);
    if (response.status === 200) {
      console.log("Dados salvos aqui ==> ", response.data);
      setTitle("Teste concluído");
      setBody("Atividade realizada com sucesso");
      setSuccess(true);
      setShow(true);
    } else {
      console.log(response)
      setTitle("Erro na conclusão");
      setBody("Atividade não foi concluída");
      setSuccess(false);
    }
  };

  const filterQuestionsByNumberInt = (questions) => {
    let data = [];
    if (questions) {
      data = questions.filter((item) => {
        return parseInt(item.id) == item.id;
      });
    }
    return data.sort((a, b) => a.id - b.id);
  };
  const filterQuestionsByString = (questions) => {
    let data = [];
    if (questions) {
      data = questions.filter((item) => {
        return +item.id != item.id;
      });
    }
    return data.sort((a, b) => a.id - b.id);
  };
  const filteredAspects = filterQuestionsByString(questions);
  const filteredQuestions = filterQuestionsByNumberInt(questions);
  const aspectsSort = filteredAspects.sort((a, b) =>
    a.aspect > b.aspect ? 1 : -1
  );

  const evaluationOb = evaluation.reduce(
    (obj, item) => Object.assign(obj, { [item.id]: item.answer }),
    {}
  );
  console.log('oBAspects',evaluationOb);
  const dominiosList = [
    { aspectos: "Aspectos Psicologicos", min: 0, max: 19 },
    {
      aspectos: "Aspectos Biologicos",
      min: 19,
      max: 54,
    },
    {
      aspectos: "Aspectos Sociais",
      min: 54,
      max: 87,
    },
    {
      aspectos: "Aspectos Multidimensionais",
      min: 87,
      max: 104,
    },
  ];
  const aspectos = {};
  for (const element of dominiosList) {
    aspectos[element.aspectos] = filteredQuestions.slice(
      element.min,
      element.max
    );
  }
  console.log("EVA:", evaluation);
  const handleClose = (path) => {
    setShow(false);
    history.push(path);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => handleClose("/searchResults")}
          >
            Buscar resultado
          </Button>
          <Button variant="secondary" onClick={() => handleClose("/")}>
            Página Inicial
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Página Inicial</Breadcrumb.Item>
        <Breadcrumb.Item href="/searchresults">Resultados</Breadcrumb.Item>
        <Breadcrumb.Item active>Resultado PAGe</Breadcrumb.Item>
      </Breadcrumb>
      <ModalTest
        Success={success}
        Title={title}
        Body={body}
        Reveal={show}
        Finish={"/dashboard"}
        Retry={true}
      />
      <Container onChange={handleChangeForm}>
        {name && datetime && (
          <>
            <h1>Nome: {name}</h1>
            <h1>Data e Hora: {formateDateTime(datetime)}</h1>
          </>
        )}

        <PageResultTable aspectos={aspectos} questions={filteredQuestions} />

        <DemandsMap questions={filteredQuestions} evaluation={evaluationOb} />

        <PageNotesTable aspects={filteredAspects} />

        <PageInvestigationTable aspects={aspectsSort} />

        <GerontologistAssessment evaluation={evaluationOb}/>

        <ActionPlanning evaluation={evaluationOb} />

        <ActionsImplementation evaluation={evaluationOb} />

        <ActionsControl evaluation={evaluationOb}/>
        <button
                class="btn whitebutton btn-lg"
                onClick={() => handleFormData()}
              >
                Salvar
              </button>
      </Container>
      <Footer />
    </>
  );
}
export default PageResult;
