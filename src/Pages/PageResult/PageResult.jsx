import { Container, Row, Col } from "react-bootstrap";
import PageDemands from "../../Components/PageDemands/PageDemands";
import PageDimension from "../../Components/PageDimensions/PageDimensions";
import PageResultTable from "../../Components/PageResultTable/PageResultTable";
import { Form } from 'react-bootstrap';
import Footer from "../../Components/Footer/Footer";


function PageResult() {
    return (
        <>
            <Container>
                <h1>Resultado PAGE</h1>
                <div>
                    <PageResultTable />

                </div>
                <div className='border border-dark bg-lgrey text-white'>
                    <h3>Mapa de Demandas</h3>
                </div>
                <div className="border mb-3">
                    <PageDemands />
                    <PageDimension />
                </div>

                <div className='border border-dark bg-lgrey text-white'>
                    <h3>AVALIAÇÃO DO GERONTÓLOGO </h3>
                </div>

                <div className="border mb-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Campo para a avaliação do gerontólogo" rows={6} />
                        </Form.Group>
                    </Form>
                </div>

                <div className='border border-dark bg-lgrey text-white'>
                    <h3>PLANEJAMENTO DAS AÇÕES </h3>
                </div>

                <div className="border mb-3">

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='h5'> 1. Identificação das Demandas/Problemas (listes as demandas/problemas identificadas na avaliação de acordo com a ordem de prioridade. Lembre-se de verificar se as prioridades da equipe são compatíveis com as prioridades do idoso/família).
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='h5'> 2. Estabelecimento das Metas (estipule as metas a curto, médio e longo prazos para cada problema ou demanda identificada no item anterior).
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='h5'> 3. Organização das Ações e dos Serviços (especifique as características das ações e dos serviços necessários para que a pessoa idosa alcance as metas estipuladas no item anterior – exemplo: número de visitas domiciliares, agendamento de consultas, intervenções, tratamentos, encaminhamentos, etc.).
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>

                <div className='border border-dark bg-lgrey text-white'>
                    <h3>COORDENAÇÃO E IMPLEMENTAÇÃO DAS AÇÕES </h3>
                </div>

                <div className="border mb-3">

                    <Container>
                        <p >
                        A coordenação e a implementação das ações corresponde à fase de execução do plano de gestão. Lembre-se que tanto o custo como a efetividade das ações devem ser sempre levados em consideração. A implementação das ações, sempre que possível, deve respeitar os desejos e possibilidades do idoso e de sua família. A gestão do caso deve incluir, de forma organizada e coordenada, todos os serviços/ações/profissionais envolvidos na atenção à pessoa idosa. Certifique-se que a instituição/equipamento, quando for o caso, tem estrutura suficiente para o desenvolvimento das ações. 
                        </p>
                        <Form>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Serviços</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Form>
                    </Container>

                </div>

                <div className='border border-dark bg-lgrey text-white'>
                    <h3>CONTROLE E REAVALIAÇÃO </h3>
                </div>

                <div className="border mb-3">
                <Container>
                        <p >Para garantir a execução e a implementação das ações, é importante monitorar o andamento do plano de atenção. O monitoramento contínuo permite a identificação de novas demandas e, consequentemente, a realização de ajustes/modificações necessários para o sucesso do plano de atenção. Sendo assim, avaliar o resultado da implementação de cada ação permite que o Gerontólogo realize a adequação do planejamento e estabeleça novas metas/objetivos.                        </p>
                        <Form>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Ação/Resultado</Form.Label>
                                        <Form.Control type="text" placeholder="Ação" />
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Adequação/Metas/Ações</Form.Label>
                                        <Form.Control type="text" placeholder="Profissionais/Serviços" />
                                    </Form.Group>
                                </Col>
                            </Row>

                           
                        </Form>
                    </Container>
                </div>

            </Container>
        </>
    );
}
export default PageResult;