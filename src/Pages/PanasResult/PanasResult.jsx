import { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {Button, Container, Modal} from 'react-bootstrap'
import { Breadcrumb } from "react-bootstrap";
import PanasBarChart from '../../Components/PanasBarChart/PanasBarChart';
import { GetResultTestById } from '../../services/api';
import { formateDateTime } from '../../services/utils';

const positiveScale = [1, 3, 5, 8, 10, 11, 13, 15, 17, 19];
const negativeScale = [2, 4, 6, 7, 9, 12, 14, 16, 18, 20];

function PanasResult () {
    const [result, setresult] = useState([]);

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [name, setName] = useState('');
    const [datetime, setDatetime] = useState('');

    const {id} = useParams();
    let history = useHistory();

    useEffect(() => {
        const getResult = async () => {
            if(id != undefined){
                let response = await GetResultTestById('panas', id);
                console.log("response => ", response);
                if(response.status === 200){    
                    let data = response.data;
                    console.log("data => ", data);
                    if(data === ""){
                        setTitle("Resultado não encontrado");
                        setBody("Não há nenhum registro encontrado no banco de dados com o identificador repassado");
                        setShow(true);
                    }else{
                        setresult(prev=> [...prev, getSumResult(positiveScale, data.Questions), getSumResult(negativeScale, data.Questions)]);
                        setName(data.Username);
                        setDatetime(data.Datetime);
                    }
                }
                else{
                    setTitle("Erro ao carregar a resposta");
                    setBody("Não foi possível carregar a resposta do banco de dados");
                    setShow(true);
                }
            }
            else{
                setTitle("Erro ao carregar a resposta");
                setBody("É necessário realizar uma busca com um identificador válido");
                setShow(true);
            }
        }
        const getSumResult = (answers, Questions) => {
            if(Questions){
                let sum = 0;
                answers.forEach(element => {
                    sum += Questions[element-1].answer;
                });
                console.log("Sum => ", sum);
                return sum;
            }
        }
        getResult();
      }, []);

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
            <Breadcrumb>
                <Breadcrumb.Item href='/dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item href='/searchResults'>Resultados</Breadcrumb.Item>
                <Breadcrumb.Item active>Resultado PANAS</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                {
                    name && datetime && 
                    <>
                        <h1>Nome: {name}</h1>
                        <h1>Data e Hora: {formateDateTime(datetime)}</h1>
                    </>
                }
                <PanasBarChart Data={result}/>
            </Container>
        </>
    );
}

export default PanasResult;