import React from 'react';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';





function Footer() {
    return (
        <>
            {
                (window.location.pathname !== "/")  &&
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
                                        <span>
                                            <a href="/contactus" class="link-dark">Contato &nbsp;</a>
                                        </span>
                                        <span>
                                            <a href="/contactus" class="link-dark"> &nbsp;Sobre Nós</a>
                                        </span>

                                    </Col>
                                </Row>


                            </footer>
                        </div>


                    </Container>
                </>
            }
            {
                (window.location.pathname === "/") &&
                <>

                    <Container fluid>

                            <footer class="text-center text-lg-start mt-3">

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
                                        <span>
                                            <a href="/contactus" class="link-dark">Contato &nbsp;</a>
                                        </span>
                                        <span>
                                            <a href="/contactus" class="link-dark"> &nbsp;Sobre Nós</a>
                                        </span>

                                    </Col>
                                </Row>


                            </footer>


                    </Container>
                </>
            }
        </>

    )
}

export default Footer;
