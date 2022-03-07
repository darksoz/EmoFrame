import { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Button, Container, Modal } from 'react-bootstrap';
import SamTable from '../../Components/SamTable/SamTable';
import { GetResultTestById } from '../../services/api';

function SamResult() {
    const [questions, setQuestions] = useState([]);

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const {id} = useParams();
    let history = useHistory();

    useEffect(() => {
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
      }, []);

      const handleClose = path => {
        setShow(false);
        history.push(path);
    }
    
    return (
        <>
            <h1>Resultado SAM</h1>
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
            <Container>
               <SamTable Data={questions}/>
            </Container>
        </>
    );
}

export default SamResult;