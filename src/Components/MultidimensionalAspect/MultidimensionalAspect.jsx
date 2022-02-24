import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Pages/Page/Page.css';
import { Questions4 } from '../../services/Questions/Page/Page';

function MultidimensionalAspect() {
    return (
        <>
            <div className='border border-dark bg-purple text-white'>
                <h3>Domínio Multidimensional</h3>
            </div>
            {
                    Questions4.map((question, index) => (
                        <>
                        <Container className="border border-dark mb-3">
                            <Row>
                                <Col xs={2} className="m-auto">
                                    <p className='h5'> {question.aspectos}</p>
                                </Col>
                                <Col xs={8}>
                                {
                                    question.perguntas.map((pergunta, index) => (
                                        <>

                                            <Row>
                                                <Col className="border">
                                                    <p className="h5">
                                                        {pergunta.title}
                                                        </p>
                                                </Col>
                                                <Col className='border'>
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
                                        </>
                                    ))
                                 }
                            </Col>
                            <Col xs={2} className="m-auto">
                        <p className="h5">
                            {question.pontucao}
                        </p>

                        <p className="h5">

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
                    ))
                }
        </>
    );
}
export default MultidimensionalAspect;