import React from 'react';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function Footer() {
    return (
        <div>
            <footer class="coremo text-center text-lg-start fixed-bottom p-1" >

                <Row>
                    <Col lg={10}>
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
                <Col lg={2} className='text-end'>
               <span>
               <a href="#" class="link-dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contato &nbsp;</a> 
               </span>
               <span>
               <a href="#" class="link-dark"> &nbsp;Sobre Nós</a>
               </span>
             
                </Col>
                </Row>


            </footer>
        </div>
    )
}

export default Footer;
