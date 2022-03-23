import { Button } from "bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './LandingPage.css';

function LandingPage() {
    return (
        <>
            <Navbar style={{ backgroundColor: "#00bfa5" }} expand={false}>
                <Container fluid>
                <Navbar.Brand href="/dashboard">
                        <img
                            src={`${process.env.PUBLIC_URL}/emoframe.png`}
                            width="60"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>                    
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <section className="masthead ">
                <Container>
                <h1 class="mb-1">EmoFrame</h1>
                <h3 class="mb-5"><em>Framework de Instrumentos de Avaliação de Respostas Emocionais</em></h3>
                <button class="btn btn-secondary btn-lg btn-block" href="">Saiba Mais</button>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>
                        sobre o emoframe blabla
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
export default LandingPage;