import Container from 'react-bootstrap/Container'
import LeapReferenceTable from '../../Components/LeapReferenceTable/LeapReferenceTable';
import LeapResultTable from '../../Components/LeapResultTable/LeapResultTable';
import { Breadcrumb, Button, Modal } from "react-bootstrap";
import { GetResultTestById } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { formateDateTime } from '../../services/utils';

let pf1_l = [3, 10, 12, 13, 21, 23, 24, 25, 26, 29, 31, 35, 39, 40];
let pf1_w = [-0.32, 0.32, 0.28, 0.66, 0.67, 0.43, 0.53, 0.31, 0.37, 0.27, 0.51, 0.52, 0.59, 0.47];
let pf2_l = [3, 8, 9, 14, 17, 27, 36, 39];
let pf2_w = [0.29, 0.73, 0.63, 0.26, 0.26, 0.34, 0.69, 0.33];
let pf3_l = [2, 12, 14, 15, 19, 27, 29, 33];
let pf3_w = [0.48, 0.43, 0.44, 0.65, 0.32, 0.34, 0.5, 0.57];
let pf4_l = [2, 5, 10, 14, 19, 28, 33];
let pf4_w = [0.33, 0.67, 0.6, 0.41, 0.68, 0.32, 0.37];
let pf5_l = [7, 18, 34];
let pf5_w = [0.82, -0.76, 0.64];
let pf6_l = [4, 26, 31, 34, 37, 38];
let pf6_w = [0.26, 0.57, 0.27, 0.27, 0.39, 0.8];
let pf7_l = [2, 3, 4, 12, 22, 27, 28, 32];
let pf7_w = [0.29, 0.25, 0.41, 0.29, 0.71, 0.31, 0.3, 0.56];
let pf8_l = [16, 20, 37];
let pf8_w = [0.6, 0.6, 0.68];
let pf9_l = [3, 4, 17, 20, 26, 27, 28];
let pf9_w = [0.36, 0.35, 0.88, 0.49, 0.33, -0.31, 0.29];
let pf10_l = [23, 27, 28, 30, 40];
let pf10_w = [0.56, 0.33, 0.38, 0.66, 0.35];
let pf11_l = [1, 12, 14, 25, 28, 31];
let pf11_w = [0.65, 0.28, 0.32, 0.45, 0.34, 0.26];
let pf12_l = [3, 6, 11, 12];
let pf12_w = [0.26, 0.59, 0.72, -0.34];

function LeapResult() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const getResult = async () => {
      if (id !== undefined) {
        let response = await GetResultTestById('leap', id);
        if (response.status === 200) {
          let data = response.data;
          if (data === "") {
            setTitle("Resultado não encontrado");
            setBody("Não há nenhum registro encontrado no banco de dados com o identificador repassado");
            setShow(true);
          }
          else {
            setQuestions(data.Questions);
            setName(data.Username);
            setDatetime(data.Datetime);
          }
        }
        else {
          setTitle("Erro ao carregar a resposta");
          setBody("Não foi possível carregar a resposta do banco de dados");
          setShow(true);
        }
      }
      else {
        setTitle("Erro ao carregar a resposta");
        setBody("É necessário realizar uma busca com um identificador válido");
        setShow(true);
      }
    }
    getResult();
  }, [id]);

  const getFactors = () => {
    let data = [];
    if (questions) {
      data = [...data,
      factorCalculation(pf1_l, pf1_w),
      factorCalculation(pf2_l, pf2_w),
      factorCalculation(pf3_l, pf3_w),
      factorCalculation(pf4_l, pf4_w),
      factorCalculation(pf5_l, pf5_w),
      factorCalculation(pf6_l, pf6_w),
      factorCalculation(pf7_l, pf7_w),
      factorCalculation(pf8_l, pf8_w),
      factorCalculation(pf9_l, pf9_w),
      factorCalculation(pf10_l, pf10_w),
      factorCalculation(pf11_l, pf11_w),
      factorCalculation(pf12_l, pf12_w)];
      return data;
    }
  }

  const factorCalculation = (locution, weight) => {
    if (questions && questions.length > 0) {
      let presence = 0;
      let max = 0;
      let min = 0;
      let sumPresence = 0;
      let sumMax = 0;
      let sumMin = 0;

      locution.forEach((element, index) => {
        sumPresence += questions[element - 1].answer * weight[index];
        sumMax += weight[index] < 0 ? weight[index] * 1 : weight[index] * 5;
        sumMin += weight[index] < 0 ? weight[index] * 5 : weight[index] * 1;
      })
      presence = sumPresence / locution.length;
      max = sumMax / locution.length;
      min = sumMin / locution.length;
      return (presence - min) / (max - min);
    }
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
          <Button variant="primary" onClick={() => handleClose("/searchResults")}>
            Buscar resultado
          </Button>
          <Button variant="secondary" onClick={() => handleClose("/")}>
            Página Inicial
          </Button>
        </Modal.Footer>
      </Modal>
      <Breadcrumb>
        <Breadcrumb.Item href='/dashboard'>Página Inicial</Breadcrumb.Item>
        <Breadcrumb.Item href='/searchResults'>Resultados</Breadcrumb.Item>
        <Breadcrumb.Item active>Resultado SAM</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        {
          questions &&
          <>
            <h1>Nome: {name}</h1>
            <h1>Data e Hora: {formateDateTime(datetime)}</h1>
            <LeapReferenceTable />
            <LeapResultTable Factors={getFactors()} />
          </>
        }
      </Container>

    </>
  );
}

export default LeapResult;