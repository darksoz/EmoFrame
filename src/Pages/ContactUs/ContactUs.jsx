import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Footer from '../../Components/Footer/Footer';


function ContactUs() {
    return (
        <>
            <Container>
                <Card className='mt-4'>
                    <h1>Contato</h1>
                    <p className='lead'>Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente. Nossa equipe entrará em contato com você em questão de horas para ajudá-lo</p>
                    <Row>
                        <Col md={9}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Seu Nome</Form.Label>
                                                <Form.Control type="text" placeholder="Digite seu nome" />
                                            </Form.Group>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Seu E-mail</Form.Label>
                                            <Form.Control type="email" placeholder="Digite seu email" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Assunto</Form.Label>
                                            <Form.Control type="text" placeholder="Digite o assunto do contato" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Sua Menssagem</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            <button className="btn whitebutton btn-lg btn-block">Enviar</button>
                        </Col>

                        <Col md={3}>
                        <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p>Av. Trab. São Carlense, 400 - Parque Arnold Schimidt, São Carlos - SP, 13566-590</p>
                        </li>

                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p>emoframe@gmail.com</p>
                        </li>
                        </ul>
                        </Col>
                    </Row>
                </Card>
                <Footer/>
            </Container>

           
        </>
    );
}
export default ContactUs;