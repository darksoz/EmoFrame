import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function RegisterPage() {

    const [retVisibility, setRetVisibility] = useState(null);

    const [workVisibility, setWorkVisibility] = useState(false);

    const [relVisibility, setRelVisibility] = useState(false);



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

    const Religion = () => {
        var e = document.getElementById("Religião");
        var strUser = e.value;
        if (strUser === "Sim") {
            setRelVisibility(true);
        }
        else {
            setRelVisibility(false);
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
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Serviço/Instituição</Form.Label>
                                        <Form.Control type="text" name="Instituição" placeholder="Serviço/Instituição" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Entrevistador</Form.Label>
                                        <Form.Control type="text" name="entrevistador " placeholder="Entrevistador" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>

                                <Col md={6}>
                                    <Form.Label>Entrevistado</Form.Label>
                                    <Form.Select aria-label="Default select example" name='entrevistado'>
                                        <option>Quem está sendo entrevistado</option>
                                        <option value="Idoso">Idoso</option>
                                        <option value="Outro">Outro</option>
                                    </Form.Select>

                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Data De entrada</Form.Label>
                                        <Form.Control type="date" name="Entrada" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>ID (Paciente/Cliente)</Form.Label>
                                        <Form.Control type="text" name="Id" placeholder="Id" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Data da Aplicação</Form.Label>
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
                        <Col md={12}>
                            <Form.Group className="mb-3 mt-2" controlId="">
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control type="text" name="enredecopage" placeholder="Endereço" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3 mt-2" controlId="">
                                <Form.Label>Telefones</Form.Label>
                                <Form.Control type="tel" name="telefonepage" placeholder="Número de telefone" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Select aria-label="Default select example" name='genero'>
                                <option disabled selected>Gênero</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Não sei"> Não sei/Prefiro não dizer</option>
                                <option value="Outro">Outro</option>
                            </Form.Select>
                        </Col>

                        <Col md={6}>
                            <Form.Select aria-label="Default select example" name='estadoCivil'>
                                <option disabled selected>Estado Cívil</option>
                                <option value="Solteiro">Solteiro(a)</option>
                                <option value="Casado">Casado(a)/União Estável</option>
                                <option value="Separado">Separado(a)/Divorciado(a)</option>
                                <option value="Viúvo">Viúvo(a)</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className='mt-4'>
                            <Form.Group className="mb-3 mt-2" controlId="">
                                <Form.Label>Idade</Form.Label>
                                <Form.Control type="text" placeholder="Idade" name="idade" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Data da Nascimento</Form.Label>
                                <Form.Control type="date" name="DataNascimento" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} style={{ marginTop: '40px' }} >
                            <Form.Select aria-label="Default select example" name='escolaridade'>
                                <option disabled selected>Escolaridade</option>
                                <option value="Analfabeto">Analfabeto(a)</option>
                                <option value="Fundamental Incompleto">Ensino fundamental (incompleto)</option>
                                <option value="Fundamental Completo">Ensino fundamental (completo)</option>
                                <option value="Médio Incompleto">Ensino médio (incompleto)</option>
                                <option value="Médio Completo">Ensino médio (completo)</option>
                                <option value="Superior Incompleto">Ensino superior (incompleto)</option>
                                <option value="Superior Completo">Ensino superior (completo)</option>
                                <option value="Superior Com Pós">Ensino superior (com pós-graduação)</option>
                            </Form.Select>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3 mt-2" controlId="">
                                <Form.Label>De acordo com sua escolaridade, você estudou, formalmente, durante quantos anos?</Form.Label>
                                <Form.Control type="text" name="YearsOfStudy" placeholder="Anos de Estudo" />
                            </Form.Group>
                        </Col>

                    </Row>

                    <Row>

                        <Col md={6} >
                            <Form.Select aria-label="Default select example" name='renda'>
                                <option disabled selected>Renda Mensal (Individual e Familiar) </option>
                                <option value="BPC">BPC</option>
                                <option value="Até um salário mínimo">Até um salário mínimo</option>
                                <option value="Entre 1 e 2 salários mínimos">Entre 1 e 2 salários mínimos</option>
                                <option value="Entre 2 e 3 salários mínimos">Entre 2 e 3 salários mínimos</option>
                                <option value="Entre 3 e 4 salários mínimos">Entre 3 e 4 salários mínimos</option>
                                <option value="Entre 4 e 5 salários mínimos">Entre 4 e 5 salários mínimos</option>
                                <option value="Entre 5 e 10 salários mínimos">Entre 5 e 10 salários mínimos</option>
                                <option value="Mais de 10 salários mínimos">Mais de 10 salários mínimos</option>
                                <option value="Prefere não informar">Prefere não informar</option>
                            </Form.Select>
                        </Col>

                        <Col md={6} >
                            <Form.Select aria-label="Default select example" name='SituaçãoMoradia'>
                                <option disabled selected>Com Quem Você Mora: </option>
                                <option value="Sozinho">Sozinho (a)</option>
                                <option value="Somente com o cônjuge">Somente com o cônjuge</option>
                                <option value="Cônjuge e filhos">Com o cônjuge e o(s) filho(s)</option>
                                <option value="Cônjuge, filhos e netos">Com o cônjuge, filho(s) e neto(s)</option>
                                <option value="Cônjuge e netos">Com o cônjuge e neto(s)</option>
                                <option value="Filhos">Com filho(s)</option>
                                <option value="Filhos e netos">Com filho(s) e neto(s)</option>
                                <option value="Netos">Com neto(s)</option>
                                <option value="Outros">Outros</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col md={12}>
                            <Form.Select id="Aposentado" name="RetirementOption" aria-label="Default select example" onChange={() => Retirement()}>
                                <option disabled selected value="Nada">O(a) Sr(a) é aposentado(a) ou pensionista?</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </Form.Select>
                            {
                                retVisibility === true &&
                                <>
                                    <Form.Group className="mb-3 mt-2" controlId="">
                                        <Form.Label>Qual a profissão que exerceu por mais tempo?</Form.Label>
                                        <Form.Control type="text" placeholder="Profissão exercida por mais tempo" name="profissao" />
                                    </Form.Group>
                                </>
                            }
                            {
                                retVisibility === false &&
                                <>
                                    <Form.Group className="mb-3 mt-2" controlId="">
                                        <Form.Label>Qual é a sua profissão atual?</Form.Label>
                                        <Form.Control type="text" placeholder="Profissão atual" mane="profissaoAtual" />
                                    </Form.Group>
                                </>
                            }

                        </Col>
                    </Row>


                    <Row className="mt-2">
                        <Col md={12}>
                            <Form.Select id="Remunerado" name="WorkOptions" aria-label="Default select example" onChange={() => Remunaration()}>
                                <option disabled selected>Exerce atualmente algum tipo de trabalho remunerado?</option>
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

                    <Row className="mt-2 mb-2">
                        <Col md={12}>
                        <Form.Select  name="ReligionOption" id="Religião" aria-label="Default select example" onChange={() => Religion()}>
                                <option disabled selected>Possui alguma religião?</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                        </Form.Select>
                        {relVisibility === true && (
                            <Form.Group className="mb-3 mt-2" controlId="">
                               <Form.Label>Religião</Form.Label>
                               <Form.Control type="text" placeholder="Religião" name="religião" />
                            </Form.Group>
                        )}

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
                        <Form.Control as="textarea" rows={3} name="relatoSaude" />
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}
export default RegisterPage;

