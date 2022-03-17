import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function RegisterPage() {
    return (
        <>
            <Container className='border p-2'>
                <Row>
                    <Col md={2}>
                        <img
                            src={`${process.env.PUBLIC_URL}/pagelogo.png`}
                            width="200"
                            className="d-inline-block align-center mt-5"
                            alt=""
                        />
                    </Col>
                    <Col md={10}>
                        <Form>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Serviço/Instituição</Form.Label>
                                        <Form.Control type="text" placeholder="Serviço/Instituição" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Entrada no Serviço</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Entrevistado</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Quem está sendo entrevistado</option>
                                        <option value="1">Idoso</option>
                                        <option value="2">Outro</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Entrevistador</Form.Label>
                                        <Form.Control type="text" placeholder="Entrevistador" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Data da Avaliação</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className='border border-dark bg-secondary text-white mt-3'>
                <h3>Dados de Identificação</h3>
            </div>
            <Container className="border border-dark mb-3">
                <Form className='mb-2'>
                    <Row>

                        <Col md={12}>
                            <Form.Group className="mb-3 mt-2" controlId="">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3 mt-2" controlId="">
                                <Form.Label>Idade</Form.Label>
                                <Form.Control type="text" placeholder="Idade" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Select aria-label="Default select example">
                                <option>Estado Cívil</option>
                                <option value="1">Solteiro(a)</option>
                                <option value="2">Casado(a)/União Estável</option>
                                <option value="3">Separado(a)/Divorciado(a)</option>
                                <option value="4">Viúvo(a)</option>

                            </Form.Select>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <Form.Label> O(a) Sr(a) é aposentado(a) ou pensionista? </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione a resposta</option>
                                <option value="1">Sim</option>
                                <option value="2">Não</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Label> Exerce atualmente algum tipo de trabalho remunerado?? </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione a resposta</option>
                                <option value="1">Sim</option>
                                <option value="2">Não</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <div className='border border-dark bg-secondary text-white mt-3'>
                <h3>Auto Relato em Saúde</h3>
            </div>
            <Container className="border border-dark mb-3">
                <Form>
                    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Relatar como foi(foram) as últimas consultas médicas
</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}
export default RegisterPage;