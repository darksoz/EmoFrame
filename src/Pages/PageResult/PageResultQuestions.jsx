import { Button, Container, Modal } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GetPageAmountOfResult, GetResultTestById } from "../../services/api";
import { useParams, useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ModalTest from "../../Components/Modal/ModalTest";
import "./PageResult.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { TotalQuestions } from "../../services/Questions/Page/Page";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PageResult() {
  const [questions, setQuestions] = useState([]);
  const [questionsObj, setQuestionsObj] = useState({});
  const [testOrder, setTestOrder] = useState("");
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [evaluation, setEvaluation] = useState([]);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [dataUser, setDataUser] = useState({});
  const [namePage, setNamePage] = useState("");
  const { id } = useParams();
  let history = useHistory();

  const handleChangeForm = (event) => {
    const id = event.target.name;
    const data = { id, answer: event.target.value };
    if (evaluation.some((a) => a.id === id)) {
      setEvaluation([...evaluation.filter((b) => b.id !== id), data]);
    } else {
      setEvaluation([...evaluation, data]);
    }
  };
  const returnName = (data) => {
    if (data.length != 0) {
      return data.filter((a) => a.id == "nomepage")[0].answer;
    } else {
      return "";
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
            let teste = returnName(data.UserDataForm, "nomepage");
            setNamePage(teste);
            let userId = data.UserDataForm.filter((a) => a.id === "Id")[0]
              .answer;
            if (userId) {
              let response = await GetPageAmountOfResult(userId);

              let arrayId = response.data.sort(function (a, b) {
                var c = new Date(a.Datetime);
                var d = new Date(b.Datetime);
                return c - d;
              });
              let amount = arrayId.length;
              let currentTest =
                arrayId.findIndex((a) => a._id === data._id) + 1;
              setTestOrder(`${currentTest} de ${amount}`);
            }
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

  useEffect(() => {
    if (questions.length >= 154) {
      console.log("entrou ");
      console.log(convertArrayToObject(questions, "id"));
      let teste = convertArrayToObject(questions, "id");
      setQuestionsObj(teste);
    }
  }, [questions]);
  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };
  console.log("obj", questionsObj);

  const handleClose = (path) => {
    setShow(false);
    history.push(path);
  };
  const returnAnswer = (id) => {
    if (questions.length != 0) {
      let answer = questions.find((item) => item.id == id);
      console.log("asnwr", answer);
      if (answer.answer !== null && answer.answer !== undefined) {
        console.log("---", answer.answer);
        return answer.id;
      }
    } else {
      return "Não Definido";
    }
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
        <Breadcrumb.Item href="/dashboard" style={{ marginLeft: "12px" }}>
          Página Inicial
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/searchresults">Resultados</Breadcrumb.Item>
        <Breadcrumb.Item active>Resultado PAGe</Breadcrumb.Item>
      </Breadcrumb>
      <ModalTest
        Success={success}
        Title={title}
        Body={body}
        Reveal={show}
        Finish={"/pageResult/" + id}
        Retry={true}
      />
      <Container>
        <Card>
          <Row>
            <p className="h4"> Questionario</p> <hr />
            {TotalQuestions.Questions.map((item) => (
              <p>
                <strong>
                  {item.question}-{item.title}
                </strong>
                <br />
                {questionsObj[item.question]?.answer == 1 ? "SIM" : "NÃO"}
                <br />
                {item.question == 3 && (
                  <>
                    {questionsObj["3.1"]?.answer}<br/>
                    {questionsObj["3.2"]?.answer}<br/>
                    {questionsObj["3.3"]?.answer}<br/>
                    {questionsObj["3.4"]?.answer}<br/>
                  </>
                )}
                {item.question == 8 && (
                  <>
                    {questionsObj["8.1"]?.answer}<br/>
                    {questionsObj["8.7"]?.answer}<br/>
                  </>
                )}
                {item.question == 35 && (
                  <>
                    {questionsObj["35.1"]?.answer}<br/>
                    {questionsObj["35.2"]?.answer}<br/>
                  </>
                )}
                {item.question == 42 && (
                  <>
                    {questionsObj["42.1"]?.answer}<br/>
                    {questionsObj["42.3"]?.answer}<br/>
                  </>
                )}
                {item.question == 44 && (
                  <>
                  {questionsObj["44.11"]?.answer}<br/>
                    {questionsObj["44.12"]?.answer}
                    {questionsObj["44.13"]?.answer}
                    {questionsObj["44.14"]?.answer}
                    {questionsObj["44.15"]?.answer}
                    {questionsObj["44.16"]?.answer}
                    {questionsObj["44.17"]?.answer}
                    {questionsObj["44.18"]?.answer}
                    {questionsObj["44.19"]?.answer}
                  </>
                )}
                {item.question == 45 && (
                  <>
                  {questionsObj["45.11"]?.answer} <br/>
                    {questionsObj["45.12"]?.answer}
                    {questionsObj["45.13"]?.answer}
                    {questionsObj["45.14"]?.answer}
                    {questionsObj["45.15"]?.answer}
                    {questionsObj["45.16"]?.answer}
                    {questionsObj["45.17"]?.answer}
                    {questionsObj["45.18"]?.answer}
                    {questionsObj["45.19"]?.answer}
                  </>
                )}
                {item.question == 46 && (
                  <>
                    {questionsObj["46.1"]?.answer}<br/>
                    {questionsObj["46.7"]?.answer}<br/>
                  </>
                )}
                {item.question == 55 && (
                  <>
                  {questionsObj["55.1"]?.answer}
                    {questionsObj["55.2"]?.answer}
                    {questionsObj["55.3"]?.answer}
                    {questionsObj["55.4"]?.answer}
                    {questionsObj["55.5"]?.answer}
                    {questionsObj["55.6"]?.answer}
                  
                  </>
                )}
              </p>
            ))}
          </Row>
        </Card>
      </Container>

      <Footer />
    </>
  );
}
export default PageResult;
