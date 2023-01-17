import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import GdsForm from '../../Components/GdsForm/GdsForm';
import { Questions } from "../../services/Questions/Gds/Gds.js";


function Gds() {
    return (
        <>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard' style={{ marginLeft: '12px' }}>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>GDS</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <Row>
                    <h1 class="likert-leap-header mt-2">GDS</h1>
                    <p class="lead ml-5 p-3"> Nós vamos conversar sobre como você anda se sentindo. Sinta-se a vontade para escolher a melhor resposta sobre a forma como você se sentiu na última semana:
                    </p>

                </Row>
                <hr />
                <Row>
                    {
                        Questions.map((content, index) => (
                            <>
                                <div style={{
                                    marginBottom: "20px",
                                }}>
                                    <GdsForm Title={content.Title}
                                        Name={content.Name} />
                                    <hr></hr>
                                </div>
                            </>
                        ))
                    }
                </Row>
                <div className='mt-5'>

                    <Footer />

                </div>

            </Container>
        </>

    );
}
export default Gds;