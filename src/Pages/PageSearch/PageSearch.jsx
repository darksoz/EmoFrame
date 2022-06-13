import React, { useState } from "react";
import { Breadcrumb, Button, Container, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { RediretToPage } from '../../services/utils';


function PageSearch() {
    const [show, setShow] = useState(false);
    const [idTest, setIdTest] = useState("");
    const handleClose = () => {
        setShow(false);
    }

    const handleSearch = () => {
        //Usa esse idTest para buscar o teste
        //Se não for encontrado um teste incompleto com esse id, mostra um alerta informando que não foi possível encontrar 
        //Se for encontrado, redireciona para a página com o teste em andamento
    }

    const handleContinue = () => {
        setShow(true);
    }

    const handleIdChange = (event) => {
        let textValue = event.target.value;
        setIdTest(textValue);
    }

    return (
        <>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href="./dashboard" style={{ marginLeft: '12px' }}>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Iniciar PAGe</Breadcrumb.Item>
            </Breadcrumb>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Buscar PAGe em andamento</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Digite o ID do entrevistado"
                            aria-label="Text"
                            aria-describedby="basic-addon1"
                            defaultValue={idTest}
                            onChange={handleIdChange}
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                    <Button variant="primary" onClick={handleSearch}>Buscar</Button>
                </Modal.Footer>
            </Modal>


            <Container className="p-4 my-5">
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/pagelogo.png`}
                        width="300"
                        className="d-inline-block align-center mt-5"
                        alt=""
                    />
                </div>

                <div>
                    <button class="btn whitebutton btn-lg" onClick={handleContinue}>Continuar um PAGe</button>
                    <button class="btn whitebutton btn-lg" onClick={() => RediretToPage('page')} style={{ marginLeft: '20px' }}>Começar novo PAGe</button>
                </div>

                <Row>

                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default PageSearch;