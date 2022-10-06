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