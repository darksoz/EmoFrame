import { Card, Col, Container, Figure, Row } from 'react-bootstrap';
import './LandingPage.css';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import { RediretToPage } from '../../services/utils';
import Link from 'react-scroll/modules/components/Link';
import { isAuthenticated } from '../../services/auth';
import { Redirect } from 'react-router-dom';
import Header from '../../Components/Header/Header';

function LandingPage() {


    return isAuthenticated() ? <Redirect to='/dashboard' /> : (
        <>
        <Header/>
            <Container className='mt-5'>
                <Row>
                    <Col className='p-2'>
                        <img src={`${process.env.PUBLIC_URL}/emoframe.png`} className="mt-5 mb-3" style={{ width: "350px" }} alt="Responsive" />

                        <blockquote>
                            <p class="lead"> Um framework composto por Instrumentos de Avaliação de Respostas Emocionais </p>
                        </blockquote>
                        <div class="d-flex justify-content-center">

                            <button class="btn whitebutton btn-lg" onClick={() => RediretToPage('login')}>Entrar</button>

                            <Link style={{ marginLeft: "1em" }} class="btn whitebutton btn-lg" to="services">Saiba Mais</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />

        </>

    )
}
export default LandingPage;