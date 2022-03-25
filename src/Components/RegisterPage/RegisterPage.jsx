import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function RegisterPage() {

    const [retVisibility, setRetVisibility] = useState(null);

    const [workVisibility, setWorkVisibility] = useState(false);


    const Retirement = () => {
        var e = document.getElementById("Aposentado");
        var strUser = e.value;
        if (strUser === "Sim") {
            setRetVisibility(true);
        }

        else if (strUser === "Nada") {
            setRetVisibility(null);
        }
        else {
            setRetVisibility(false);
        }
    }

    const Remunaration = () => {
        var e = document.getElementById("Remunerado");
        var strUser = e.value;
        if (strUser === "Sim") {
            setWorkVisibility(true);
        }
        else {
            setWorkVisibility(false);
        }
    }


    return (
        <>
            <Container className='border p-2'>
                <Row>
                    <Col md={2}>
                        <img
                            src={`${process.env.PUBLIC_URL}/pagelogo.png`}
                            width="200"
                            className="d-inline-block align-center mt-5"
                            alt=""
                        />
                    </Col>
                    <Col md={10}>
                        <Form>
                            <Row>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Serviço/Instituição</Form.Label>
                                        <Form.Control type="text" name="Instituição" placeholder="Serviço/Instituição" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Entrada no Serviço</Form.Label>
                                        <Form.Control type="date" name="Entrada"/>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Entrevistado</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Quem está sendo entrevistado</option>
                                        <option value="Idoso">Idoso</option>
                                        <option value="Outro">Outro</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Entrevistador</Form.Label>
                                        <Form.Control type="text" name="entrevistador "placeholder="Entrevistador" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Data da Avaliação</Form.Label>
                                        <Form.Control type="date" name="DataAvaliação" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className='border border-dark bg-secondary text-white mt-3'>
                <h3>Dados de Identificação</h3>
            </div>
            <Container className="border border-dark mb-3">
                <Form className='mb-2'>
                    <Row>

                        <Col md={12}>
                            <Form.Group className="mb-3 mt-2" controlId="">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" name="nomepage" placeholder="Nome" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3 mt-2" controlId="">
                                <Form.Label>Idade</Form.Label>
                                <Form.Control type="text" placeholder="Idade" name="idade" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Select aria-label="Default select example">
                                <option>Estado Cívil</option>
                                <option value="Solteiro">Solteiro(a)</option>
                                <option value="Casado">Casado(a)/União Estável</option>
                                <option value="Separado">Separado(a)/Divorciado(a)</option>
                                <option value="Viúvo">Viúvo(a)</option>

                            </Form.Select>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <Form.Label> O(a) Sr(a) é aposentado(a) ou pensionista? </Form.Label>
                            <Form.Select id="Aposentado" name="RetirementOption" aria-label="Default select example" onChange={() => Retirement()}>
                                <option disabled selected value="Nada">Selecione a resposta</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </Form.Select>
                            {
                                retVisibility === true &&
                                <>
                                    <Form.Group className="mb-3 mt-2" controlId="">
                                        <Form.Label>Qual a profissão que exerceu por mais tempo?</Form.Label>
                                        <Form.Control type="text" placeholder="Profissão exercida por mais tempo" />
                                    </Form.Group>
                                </>
                            }
                            {
                                retVisibility === false &&
                                <>
                                    <Form.Group className="mb-3 mt-2" controlId="">
                                        <Form.Label>Qual é a sua profissão atual?</Form.Label>
                                        <Form.Control type="text" placeholder="Profissão atual" />
                                    </Form.Group>
                                </>
                            }

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Label> Exerce atualmente algum tipo de trabalho remunerado?? </Form.Label>
                            <Form.Select id="Remunerado" name="WorkOptions" aria-label="Default select example" onChange={() => Remunaration()}>
                                <option disabled selected>Selecione a resposta</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </Form.Select>
                            {
                                workVisibility === true &&
                                <>
                                    <Form.Group className="mb-3 mt-2" controlId="">
                                        <Form.Label>Qual trabalho reunerado exerce?</Form.Label>
                                        <Form.Control type="text" placeholder="Trabalho remunerado" name="trabalhoremunerado" />
                                    </Form.Group>
                                </>
                            }
                        </Col>
                    </Row>
                </Form>
            </Container>

            <div className='border border-dark bg-secondary text-white mt-3'>
                <h3>Auto Relato em Saúde</h3>
            </div>
            <Container className="border border-dark mb-3">
                <Form>
                    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Relatar como foi(foram) as últimas consultas médicas
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}
export default RegisterPage;