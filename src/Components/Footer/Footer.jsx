import React from 'react';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';


function Footer() {
    return (
                <>
                    <Container fluid>
                        <div className='margin_top'>

                            <footer class="bg-white text-center text-lg-start fixed-bottom">

                                <Row>
                                    <Col lg={9}>
                                        <div>
                                            <img
                                                src={`${process.env.PUBLIC_URL}/emoframe.png`}
                                                width="30"
                                                className="d-inline-block align-center"
                                                alt=""
                                            />
                                            © 2022 Suzane Santos dos Santos
                                        </div>
                                    </Col>
                                    <Col lg={3} className='text-end'>
                                        <span style={{marginRight:'20px'}}>
                                            <a href="/contactus" class="link-dark">Contato</a>
                                        </span>
                                        <span style={{marginRight:'8px'}}>
                                            <a href="/aboutus" class="link-dark"> Sobre Nós</a>
                                        </span>
                                    </Col>
                                </Row>
                            </footer>
                        </div>
                    </Container>
                </>

    )
}

export default Footer;