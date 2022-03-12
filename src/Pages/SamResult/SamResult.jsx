import { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Breadcrumb, Button, Container, Modal } from 'react-bootstrap';
import SamTable from '../../Components/SamTable/SamTable';
import { GetResultTestById } from '../../services/api';
import { formateDateTime } from '../../services/utils';

function SamResult() {
    const [questions, setQuestions] = useState([]);

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [name, setName] = useState('');
    const [datetime, setDatetime] = useState('');


    const {id} = useParams();
    let history = useHistory();

    useEffect(async () => {
        const getResult = async () => {
            if(id !== undefined){
                let response = await GetResultTestById('sam', id);
                if(response.status === 200){    
                    let data = response.data;
                    if(data === ""){
                        setTitle("Resultado não encontrado");
                        setBody("Não há nenhum registro encontrado no banco de dados com o identificador repassado");
                        setShow(true);
                    }else{
                        setQuestions([...data.Questions]);
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
        await getResult();
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
                <Breadcrumb.Item active>Resultado SAM</Breadcrumb.Item>
            </Breadcrumb>   
            <Container>
                {
                    name && datetime && questions &&
                    <>
                        <h1>Nome: {name}</h1>
                        <h1>Data e Hora: {formateDateTime(datetime)}</h1>
                        <SamTable Data={questions}/>
                    </>
                }
            </Container>
        </>
    );
}

export default SamResult;