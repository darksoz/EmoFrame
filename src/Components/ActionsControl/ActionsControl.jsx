import { Form } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";

function ActionsControl () {
    return (
        <>
        <div className='border border-dark bg-lgrey text-white'>
                    <h3>CONTROLE E REAVALIAÇÃO </h3>
                </div>

                <div className="border mb-3">
                <Container>
                        <p >Para garantir a execução e a implementação das ações, é importante monitorar o andamento do plano de atenção. O monitoramento contínuo permite a identificação de novas demandas e, consequentemente, a realização de ajustes/modificações necessários para o sucesso do plano de atenção. Sendo assim, avaliar o resultado da implementação de cada ação permite que o Gerontólogo realize a adequação do planejamento e estabeleça novas metas/objetivos.                        </p>
                        <Form>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
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
export default ActionsControl;