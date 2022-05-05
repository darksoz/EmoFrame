import Footer from '../../Components/Footer/Footer';
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
function AboutUs() {
    return (
        <>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href='/'>Ínicio</Breadcrumb.Item>
                <Breadcrumb.Item active>Sobre nós</Breadcrumb.Item>
            </Breadcrumb>

            <Container fluid>
                <Row>
                    <Col />
                    <Col>
                        <h4>Sobre Nós</h4>
                        <hr />
                    </Col>
                    <Col />
                </Row>

                <Row>
                    <Col />
                    <Col md={8}>
                        <p className='lead'>Este projeto é uma pesquisa desenvolvida pela Universidade de São Paulo (USP). </p>
                        <p>  O EmoFrame é um framework que busca reunir instrumentos de avaliação, sobretudo de respostas emocionais, em um único ambiente. O EmoFrame tem dois objetivos principais: auxiliar profissionais da Computação no processo de avaliação de suas soluções Computacionais e permitir que profissionais de outras áreas possam sistematizar intrumentos de avaliação que normalmente são aplicados manualmente.</p>
                    </Col>
                    <Col />
                </Row>

            </Container>

            <Container fluid>
                <Row>
                    <Col />
                    <Col>
                        <h4>Nosso Time</h4>
                        <hr />
                    </Col>
                    <Col />
                </Row>

                <Row>
                    
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/Kamila.jpg`} />
                            <Card.Body>
                                <h4>Pesquisadora Responsável - Kamila Rodrigues</h4>
                                <Card.Text>
                                Professora Doutora I no Instituto de Ciências Matemáticas e de Computação do ICMC/USP.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/Suzane.jpeg`} />
                            <Card.Body>
                                <h4>Desenvolvedora Responsável - Suzane Santos</h4>
                                <Card.Text>
                                Mestranda do Programa de Pós-graduação em Ciências de Computação e Matemática Computacional do ICMC-USP.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/Erick.jpg`} />
                            <Card.Body>
                                <h4> Desenvolvedor Colaborador - Erick Modesto</h4>
                                <Card.Text>
                                Mestre em Ciência da Computação no Programa de Pós-Graduação em Ciência da Computação (PPGCC) da UFPA.                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/Rafael.jpg`} />
                            <Card.Body>
                                <h4> Desenvolvedor Colaborador - Rafael do Monte </h4>
                                <Card.Text style={{padding:'10px'}}>
                                Graduando em Sistemas de Informação da Universidade Federal do Pará (UFPA). 
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
            <Footer />
        </>
    )
}
export default AboutUs;