import { Container, Row, Col, Form } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import { Breadcrumb } from "react-bootstrap";
import Header from "../../Components/Header/Header";


function RecSys() {
    return (
        <>
        <Header/>
            <Breadcrumb>
                <Breadcrumb.Item href='/'>Ínicio</Breadcrumb.Item>
                <Breadcrumb.Item active>Recomendação de Instrumento</Breadcrumb.Item>
            </Breadcrumb>
            <Container className="mt-5">
                <img src={`${process.env.PUBLIC_URL}/emoframe.png`} className="mt-5 mb-3" style={{ width: "250px" }} alt="Responsive" />

                <blockquote>
                    <p class="lead">
                        Este projeto busca reunir diferentes instrumentos para a avaliação de respostas emocionais em um framework que possa guiar profissionais de diversas áreas na escolha de artefatos adequados para as suas avaliações, dependendo da solução desenvolvida e do seu contexto de uso.          </p>
                </blockquote>

                <Form>
                    <strong> Encontre o istrumento adequado para a sua solução: </strong>
                    <Row>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option selected disabled>Faixa-etária</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option selected disabled>Gênero</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>

                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option selected disabled>Tempo de aplicação</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option selected disabled>Tipo de avaliação</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>

                <button class="btn whitebutton btn-lg btn-block mt-4">Buscar</button>


                <Footer />
            </Container>
        </>
    )
}
export default RecSys;