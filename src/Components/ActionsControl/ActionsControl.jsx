import { Form } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";

function ActionsControl (props) {
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
                                        <Form.Control type="date" name='controleData1'  value={props.evaluation.controleData1}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação"name='controleAcao1' value={props.evaluation.controleAcao1} />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='controleServico1' value={props.controlServico1}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='controleData1'  value={props.evaluation.controleData2}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação"name='controleAcao1' value={props.evaluation.controleAcao2} />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='controleServico1' value={props.controlServico2}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='controleData1'  value={props.evaluation.controleData3}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação"name='controleAcao1' value={props.evaluation.controleAcao3} />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='controleServico1' value={props.controlServico3}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='controleData1'  value={props.evaluation.controleData4}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação"name='controleAcao1' value={props.evaluation.controleAcao4} />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='controleServico1' value={props.controlServico4}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='controleData1'  value={props.evaluation.controleData5}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação"name='controleAcao1' value={props.evaluation.controleAcao5} />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='controleServico1' value={props.controlServico5}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='controleData1'  value={props.evaluation.controleData6}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação"name='controleAcao1' value={props.evaluation.controleAcao6} />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='controleServico1' value={props.controlServico6}/>
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