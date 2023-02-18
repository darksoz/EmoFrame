import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function UesApp() {
    return (
        <>
            <Container>
                <Row>
                    <h1 class="likert-leap-header mt-2">UES-BR</h1>
                    <Form name="AplicationName">
                        <Row className="row justify-content-center align-items-center">
                            <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Qual é a aplicação que você quer avaliar?</Form.Label>
                                        <Form.Control name="formname" type="text" placeholder="Nome da Aplicação" />
                                    </Form.Group>
                            </Col>
                            </Row>

                    </Form>
                </Row>
            </Container>
        </>
    );
}
export default UesApp;