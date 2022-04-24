import { Form } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";


function ActionsImplementation (props) {
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
                                        <Form.Control type="date"  name='coordenacaoData1' value={props.evaluation.coordenacaoData1}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação"  name='coordenacaoAcao1' value={props.evaluation.coordenacaoAcao1}/>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='coordenacaoServico1'value={props.evaluation.coordenacaoServico1}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='cordenacaoData2' value={props.evaluation.coordenacaoData2} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" name='coordenacaoAcao2' value={props.evaluation.coordenacaoAcao2}/>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='coordenacaoServico2' value={props.evaluation.coordenacaoServico2}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='coordenacaoData3'value={props.evaluation.coordenacaoData3}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" name='coordenacaoAcao3' value={props.evaluation.coordenacaoAcao3} />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='coordenacaoServico3' value={props.evaluation.coordenacaoServico3}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='coordenacaoData4' value={props.evaluation.coordenacaoData4}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" name='coordenacaoAcao4' value={props.evaluation.coordenacaoAcao4}/>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='coordenacaoServico4' value={props.evaluation.coordenacaoServico4}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date"name='coordenacaoData5' value={props.evaluation.coordenacaoData5}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" name='coordenacaoAcao5' value={props.evaluation.coordenacaoAcao5}/>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='coordenacaoServico5' value={props.evaluation.coordenacaoServico5}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" name='coordenacaoData6' value={props.evaluation.coordenacaoData6}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" name='coordenacaoAcao6' value={props.evaluation.coordenacaoAcao6}/>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" name='coordenacaoServico6' value={props.evaluation.coordenacaoServico6} />
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