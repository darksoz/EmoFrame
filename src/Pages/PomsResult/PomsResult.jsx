import { useEffect, useState } from "react";
import { Breadcrumb, Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LineChartPoms from "../../Components/LineChartPoms/LineChartPoms";
import PomsTable from "../../Components/PomsTable/PomsTable";
import { GetResultTestById } from "../../services/api";
import { formateDateTime } from "../../services/utils";

let T_scale = [1, 10, 14, 18, 26, 18];
let D_scale = [6, 13, 15, 19, 27, 33];
let H_scale = [2, 8, 12, 22, 25, 32];
let F_scale = [3, 11, 17, 20, 30, 36];
let V_scale = [4, 7, 9, 24, 29, 34];
let C_scale = [5, 16, 21, 23, 31, 35];
let Reverse = [23, 26, 31];

function PomsResult() {
    const [questions, setQuestions] = useState([]);
    const [scaleResults, setScaleResults] = useState([]);
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
                let response = await GetResultTestById('poms', id);
                if (response.status === 200) {
                    let data = response.data;
                    console.log("Data", data)
                    if (data === "") {
                        setTitle("Resultado não encontrado");
                        setBody("Não há nenhum registro encontrado no banco de dados com o identificador repassado");
                        setShow(true);
                    }
                    else {
                        setQuestions(data.Questions);
                        setScaleResults(prev => [...prev,
                        getScalesSum(data.Questions, T_scale),
                        getScalesSum(data.Questions, D_scale),
                        getScalesSum(data.Questions, H_scale),
                        getScalesSum(data.Questions, F_scale),
                        getScalesSum(data.Questions, V_scale),
                        getScalesSum(data.Questions, C_scale),
                        ])
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

    const getScalesSum = (answers, scaleQuestions) => {
        if (answers.length > 0) {
            let sum = 0
            scaleQuestions.forEach(question => {

                if (Reverse.includes(question)) {
                    sum += 4 - answers[question - 1].answer;
                }
                else {
                    sum += answers[question - 1].answer;
                }
            });
            return sum;
        }
    }

    const getPTH = () => {
        if (scaleResults.length > 0) {
            return (scaleResults[0] + scaleResults[1] + scaleResults[2] + scaleResults[3] + scaleResults[5]) - scaleResults[4] + 100
        }
    }

    const handleClose = path => {
        setShow(false);
        history.push(path);
    }

    return (
        <>
            <Header />
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
                <Breadcrumb.Item active>Resultado POMS</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                {
                    questions &&
                    <>
                        <h1>Nome: {name}</h1>
                        <h1>Data e Hora: {formateDateTime(datetime)}</h1>
                        <Row class="mt-5">
                            <Col>
                                <PomsTable ScaleResults={scaleResults} />
                            </Col>
                        </Row>
                    </>
                }
                <Row>
                    <h5>Fórmula de Perturbação Total de Humor (PTH)</h5>
                    <Col>
                        <div class="text-center border border-dark p-4">

                            <h3>PTH = [(tensão + depressão + hostilidade + fadiga + confusão)- vigor]+ 100</h3>
                            {
                                scaleResults.length > 0 ?
                                    <h3> PTH = [({scaleResults[0]} + {scaleResults[1]} + {scaleResults[2]} + {scaleResults[3]} + {scaleResults[5]})- {scaleResults[4]}] + 100 = {getPTH()}</h3> :
                                    <></>
                            }

                        </div>
                        <p>Quanto maior o valor de PTH, maior é a piora do humor.</p>
                    </Col>
                </Row>
                <Row>
                    <LineChartPoms ScaleResults={scaleResults} />
                </Row>
            </Container>
            <Footer />
        </>
    );
}
export default PomsResult;