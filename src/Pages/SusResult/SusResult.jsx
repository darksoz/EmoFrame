import { useEffect, useState } from 'react';
import {Button, Container, Modal} from 'react-bootstrap'
import SusScoreReference from "../../Components/SusScoreReference/SusScoreReference";
import SusVariationPlot from "../../Components/SusVariationPlot/SusVariationPlot";
import { GetResultTestById} from '../../services/api';
import { Breadcrumb } from "react-bootstrap";
import {useParams, useHistory} from 'react-router-dom';
import { formateDateTime } from '../../services/utils';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const negativeQuestions = [18, 19, 22, 24, 27];

function SusResult(){
    const [questions, setQuestions] = useState([]);
    const [name, setName] = useState('');
    const [solution, setSolution] = useState('');
    const [datetime, setDatetime] = useState('');

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const {id} = useParams();
    let history = useHistory();

    const NormalizeScore = (val, max, min) => 
    { 
        return ((val - min) / (max - min)) * 100; 
    }
    const GetSusScore = () =>{
        let sum = 0;
        questions.forEach((item, index) => {
            sum += negativeQuestions.includes(index + 1) ? (5 - item.answer) :  (item.answer - 1);
        });
        return NormalizeScore(sum,112,0).toFixed(2);
    }

    const GetVariationAnswer = () => {
        let variation = [];
        let result;
        questions.forEach(item => {
            result = 3 - item.answer;
            variation.push(result);
        });
        return variation
    }

    const handleClose = path => {
        setShow(false);
        history.push(path);
    }

    useEffect(() => {
        const getResult = async () => {
            if(id !== undefined){
                let response = await GetResultTestById('sus', id);
                if(response.status === 200){    
                    let data = response.data;
                    if(data === ""){
                        setTitle("Resultado não encontrado");
                        setBody("Não há nenhum registro encontrado no banco de dados com o identificador repassado");
                        setShow(true);
                    }else{
                        setQuestions(data.Questions);
                        setName(data.Username);
                        setSolution(data.Solution);
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
        getResult();
      }, [id]);
    return(
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
                <Breadcrumb.Item active>Resultado SUS</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <h1>Nome: {name}</h1>
                <h1>Solução Avaliada: {solution}</h1>
                <h1>Data e Hora: {formateDateTime(datetime)}</h1>
                <Button style={{backgroundColor:"#00bfa5",
                                borderColor: "#00bfa5",
                                margin:"20px",
                                padding:"10px"}}>
                        <h1>Sus Score = {GetSusScore()}</h1>
                </Button>
                <SusScoreReference/>
                <SusVariationPlot Variation={GetVariationAnswer()}/>
            </Container>

            <div className='mt-5'>
            <Footer/>
            </div>
            
        </>
    )
}

export default SusResult;
