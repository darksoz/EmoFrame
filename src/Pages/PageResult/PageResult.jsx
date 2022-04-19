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

function PageResult() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams();
  let history = useHistory();

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
            console.log("data", data);
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
        return (+item.id) != item.id;
      });
    }
    return data.sort((a, b) => a.id - b.id);
  };
  const filteredAspects = filterQuestionsByString(questions);
  const filteredQuestions = filterQuestionsByNumberInt(questions);

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

  const handleClose = path => {
    setShow(false);
    history.push(path);
}

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={()=>handleClose("/searchResults")}>
                Buscar resultado
            </Button>
            <Button variant="secondary" onClick={()=>handleClose("/")}>
                Página Inicial
            </Button>
        </Modal.Footer>
      </Modal>
      <Header/>
      <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Página Inicial</Breadcrumb.Item>
        <Breadcrumb.Item href="/searchresults">Resultados</Breadcrumb.Item>
        <Breadcrumb.Item active>Resultado PAGe</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
          {
            name && datetime && 
            <>
                <h1>Nome: {name}</h1>
                <h1>Data e Hora: {formateDateTime(datetime)}</h1>
            </>
          }

        <PageResultTable aspectos={aspectos} questions={filteredQuestions}/>

        <DemandsMap questions={filteredQuestions} />

        <PageNotesTable aspects={filteredAspects}/>

        <PageInvestigationTable/>

        <GerontologistAssessment />

        <ActionPlanning />

        <ActionsImplementation />

        <ActionsControl />
      </Container>
      <Footer/>
    </>
  );
}
export default PageResult;
