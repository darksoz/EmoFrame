import { Card, Col, Container, Row } from 'react-bootstrap';
import './LandingPage.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';
import { RediretToPage } from '../../services/utils';
import Link from 'react-scroll/modules/components/Link';

function LandingPage() {
    const history = useHistory();

    function goToPage(path) {
        history.push(path);
    }
    return (
        <>
            <section class="masthead d-flex align-items-center" id="page-top">

                <Container className='mt-5'>
                    <Row className='mt-5'>
                        <Col className='mt-5 align-items-center'>

                            <span>                
                                <button class="btn btn-dark btn-xl" onClick={() => RediretToPage('login')}>Entrar</button>
                            </span>

                            <span>                
                                <Link style={{marginLeft: "1em"}} class="btn btn-dark btn-xl" to="services">Saiba Mais</Link>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='about' id="services">
                
                <Container className='mb-2'>
                    <Row>
                        <p className='h1'> Sobre o EmoFrame</p>
                    </Row>

                    <Row>
                        <h3>Analisar aspectos emocionais de usuários, quando estes interagem com soluções computacionais interativas, constitui-se um desafio para profissionais da Computação. Em diversas situações, tal avaliação fica a cargo dos profissionais especialistas do domínio estudado. Este projeto busca reunir diferentes instrumentos para a avaliação de respostas emocionais em um framework, o EmoFrame.
                        </h3>
                    </Row>

                    <Row className='mt-5'>

                        <h4> O EmoFrame tem como função</h4>

                        <Col>
                            <Card className='bgA'>

                                <p className='lead'>Auxiliar o profissional da Computação a encontrar ferramentas adequadas para o público alvo da sua aplicação, levando em consideração as particularidades dos usuários.</p>
                            </Card>
                        </Col>

                        <Col >
                            <Card className='bgB'>
                                <p className='lead'> Auxiliar profissionais, sobretudo da área da Saúde, a aplicarem seus instrumentos de forma sistematizada e com rápida visualização dos resultados. </p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='bgC'>
                                <p className='lead'> Viabilizar que profissionais da Computação, também possam usar instrumentos de outros domínios de modo a obter resultados sobre a efetividade no uso da sua solução. </p>
                            </Card>

                        </Col>
                    </Row>
                </Container>
                <button class="btn whitebutton btn-lg btn-block" onClick={() => RediretToPage('recommendation')}>Encontre o instrumento adequado para sua solução</button>
            </section>

            <Link class="scroll-to-top rounded" to="page-top"><i class="fas fa-lg fa-angle-up"></i></Link>

            <Footer />




        </>

    )
}
export default LandingPage;