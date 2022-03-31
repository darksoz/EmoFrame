import { Container } from "react-bootstrap";
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
import sortArray from "sort-array";

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

  const filterQuestionsByNumber = (questions) => {
    let data = [];
    if (questions) {
      data = questions.filter((item) => {
        return parseFloat(item.id) == item.id;
      });
    }
    return data.map((item) => {
      return {
        id: parseInt(item.id),
        ...item,
      };
    });
  };
  const filteredQuestions = filterQuestionsByNumberInt(questions);
  const dominiosList = [
    { aspectos: "Aspectos Psicologicos", min: 0, max: 14 },
    {
      aspectos: "Aspectos Biologicos",
      min: 14,
      max: 53,
    },
    {
      aspectos: "Aspectos Sociais",
      min: 53,
      max: 86,
    },
    {
      aspectos: "Aspectos Multidimensionais",
      min: 86,
      max: 102,
    },
  ];
  const aspectos = {};
  for (const element of dominiosList) {
    aspectos[element.aspectos] = filteredQuestions.slice(
      element.min,
      element.max
    );
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="./dashboard">Página Inicial</Breadcrumb.Item>
        <Breadcrumb.Item href="./results">Resultados</Breadcrumb.Item>
        <Breadcrumb.Item active>Resultado PAGe</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <h1>Resultado PAGE</h1>

        <PageResultTable aspectos={aspectos} questions={filteredQuestions}/>

        <DemandsMap questions={filteredQuestions} />

        <GerontologistAssessment />

        <ActionPlanning />

        <ActionsImplementation />

        <ActionsControl />
      </Container>
    </>
  );
}
export default PageResult;
