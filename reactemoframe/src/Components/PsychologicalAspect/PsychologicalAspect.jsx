import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PsychologicalAspect() {
    return (
        <>
            <div className='border border-dark bg-primary text-white'>
                <h3>Relacionados a Aspectos Psicológicos</h3>
            </div>

            <Container className="border border-dark">
                <Row>
                    <Col xs={2} className="m-auto ">
                        <p className="h4">
                            DÉFICIT <br/>
                            COGNITIVO
                        </p>
                    </Col>

                    <Col xs={8}>
                        <Row>

                            <Col className="border">
                                <p className="h4">
                                    1. O(A) senhor(a) considera que sua memória é tão boa quanto antes?
                                </p>
                            </Col>
                            <Col className="border">
                                <p className="h4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            SIM
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            NÃO
                                        </label>
                                    </div>
                                </p>

                            </Col>

                        </Row>
                        <Row>

                            <Col className="border">
                                <p className="h4">
                                    2.
                                </p>
                            </Col>
                            <Col className="border">
                                <p className="h4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            SIM
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            NÃO
                                        </label>
                                    </div>
                                </p>

                            </Col>

                        </Row>
                        <Row>

                            <Col className="border">
                                <p className="h4">
                                    3.
                                </p>
                            </Col>
                            <Col className="border">
                                <p className="h4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            SIM
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            NÃO
                                        </label>
                                    </div>
                                </p>

                            </Col>

                        </Row>
                        <Row>

                            <Col className="border">
                                <p className="h4">
                                    4.
                                </p>
                            </Col>
                            <Col className="border">
                                <p className="h4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            SIM
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            NÃO
                                        </label>
                                    </div>
                                </p>

                            </Col>

                        </Row>
                        <Row>

                            <Col className="border">
                                <p className="h4">
                                    5.
                                </p>
                            </Col>
                            <Col className="border">
                                <p className="h4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            SIM
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            NÃO
                                        </label>
                                    </div>
                                </p>

                            </Col>

                        </Row>
                        <Row>

                            <Col className="border">
                                <p className="h4">
                                    6.
                                </p>
                            </Col>
                            <Col className="border">
                                <p className="h4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            SIM
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            NÃO
                                        </label>
                                    </div>
                                </p>

                            </Col>

                        </Row>
                    </Col>

                    <Col xs={2} className="m-auto">
                        <p className="h4">
                            Pontuação (máxima=6):
                        </p>

                        <p className="h5">
                            Necessita de investigação?
                        </p>
                        
                        <p className="h5">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            SIM
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            NÃO
                                        </label>
                                    </div>
                                </p>

                    </Col>
                </Row>


            </Container>

        </>
    );
}
export default PsychologicalAspect;