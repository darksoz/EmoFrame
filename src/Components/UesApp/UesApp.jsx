import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function UesApp() {
    return (
        <>
            <Container>
                <Row>
                    <h1 class="likert-leap-header mt-2">UES-BR</h1>
                    <Form>
                        <Row className="row justify-content-center align-items-center">
                            <Col md={6}>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Qual é a aplicação que você quer avaliar?</Form.Label>
                                        <Form.Control type="text" placeholder="Nome da Aplicação" />
                                    </Form.Group>
                                    <button class="btn whitebutton btn-lg">Enviar</button>
                                </div>
                            </Col>
                            </Row>

                    </Form>
                </Row>
            </Container>
        </>
    );
}
export default UesApp;