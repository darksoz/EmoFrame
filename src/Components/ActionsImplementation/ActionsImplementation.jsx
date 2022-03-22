import { Form } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";


function ActionsImplementation () {
    return (
        <>
        <div className='border border-dark bg-lgrey text-white'>
                    <h3>COORDENAÇÃO E IMPLEMENTAÇÃO DAS AÇÕES </h3>
                </div>

                <div className="border mb-3">

                    <Container>
                        <p >
                        A coordenação e a implementação das ações corresponde à fase de execução do plano de gestão. Lembre-se que tanto o custo como a efetividade das ações devem ser sempre levados em consideração. A implementação das ações, sempre que possível, deve respeitar os desejos e possibilidades do idoso e de sua família. A gestão do caso deve incluir, de forma organizada e coordenada, todos os serviços/ações/profissionais envolvidos na atenção à pessoa idosa. Certifique-se que a instituição/equipamento, quando for o caso, tem estrutura suficiente para o desenvolvimento das ações. 
                        </p>
                        <Form>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Form>
                    </Container>

                </div>
        </>
    )
}

export default ActionsImplementation;