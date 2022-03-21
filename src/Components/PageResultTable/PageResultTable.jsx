import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import '../../Pages/Page/Page.css';
import { Form } from 'react-bootstrap';

function PageResultTable() {
    return (
        <>
            <Container>
                <Table bordered>
                    <tbody>
                        <tr className='bg-lgrey'>
                            <td colSpan={3} className='border border-dark text-white h3'>Escores</td>
                        </tr>
                        <tr >
                            <td colSpan={2}>
                                PONTUAÇÃO POR DIMENSÃO
                            </td>
                            <td className='custom'>
                                <div>
                                    ASPECTOS PSICOLÓGICOS (MÁXIMA = 14 PONTOS): X
                                </div>
                                <div>
                                    ASPECTOS BIOLÓGICOS (MÁXIMA = 36 PONTOS): Y
                                </div>

                                <div>
                                    ASPECTOS SOCIAIS (MÁXIMA = 32 PONTOS): Z
                                </div>

                                <div>
                                    QUEDAS (MÁXIMA = 16 PONTOS): W
                                </div>

                            </td>
                        </tr>
                        <tr className='bg-lgrey'>
                            <td colSpan={3}>PONTUAÇÃO TOTAL (MÁXIMA = 98 PONTOS): T</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>CLASSIFICAÇÃO DE RISCO DE VULNERABILIDADE BIOPSICOSSOCIAL</td>
                        </tr>
                        <tr className='bg-lgrey'>
                            <td>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label="&ge; 70 PONTOS = RISCO BAIXO"
                                            />
                                        </div>
                                    ))}
                                </Form>

                            </td>
                            <td>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label="69 A 40 PONTOS = RISCO MODERADO"
                                            />
                                        </div>
                                    ))}
                                </Form>

                            </td>
                            <td>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label="&le;  39 PONTOS = RISCO ALTO"
                                            />
                                        </div>
                                    ))}
                                </Form>

                            </td>
                        </tr>
                    </tbody>
                </Table>

            </Container>
        </>
    );
}
export default PageResultTable;