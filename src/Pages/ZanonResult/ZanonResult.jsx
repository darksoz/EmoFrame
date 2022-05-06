import { useEffect, useState } from 'react';
import {Button, Container, Modal} from 'react-bootstrap'
import { Breadcrumb } from "react-bootstrap";
import { useHistory, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ZanonBarChart from '../../Components/ZanonBarChart/ZanonBarChart';
import { GetResultTestById } from '../../services/api';
import { formateDateTime } from '../../services/utils';

let negativeAffects = [1, 4, 5, 7, 10, 11, 12, 16, 18, 19];
let positiveAffects = [2, 3, 6, 8, 9, 13, 14, 15, 17, 20];

function ZanonResult (  ) {

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
            if(id !== undefined){
                let response = await GetResultTestById('zanon', id);
                if(response.status === 200){    
                    let data = response.data;
                    if(data === ""){
                        setTitle("Resultado não encontrado");
                        setBody("Não há nenhum registro encontrado no banco de dados com o identificador repassado");
                        setShow(true);
                    }
                    else{
                        setresult(prev=> [...prev, getSumResult(positiveAffects, data.Questions), getSumResult(negativeAffects, data.Questions)]);
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
                return sum;
            }
        }
        getResult();
      }, [id]);

    const handleClose = path => {
        setShow(false);
        history.push(path);
    }

    return (
        <>
        <Header/>
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
            <Breadcrumb.Item href='/dashboard' style={{marginLeft:'12px'}}>Página Inicial</Breadcrumb.Item>
            <Breadcrumb.Item href='/searchResults'>Resultados</Breadcrumb.Item>
            <Breadcrumb.Item active>Resultado ZANON</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                {
                    name && datetime && 
                    <>
                        <h1>Nome: {name}</h1>
                        <h1>Data e Hora: {formateDateTime(datetime)}</h1>
                    </>
                }
                <ZanonBarChart Data={result}/>
                <Footer/>
            </Container>
       
        </>
    )
}

export default ZanonResult;
