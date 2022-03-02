import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import '../../Pages/Page/Page.css';

function PageResultTable() {
    return (
        <>
            <Container>
                <h3>Tabela de Referência PAGe</h3>
                <Table bordered>
                    <tbody>
                        <tr className='bg-lgrey'>
                            <td colSpan={3}>Escores</td>
                        </tr>
                        <tr className='bg-lblue'>
                            <td colSpan={2}>
                                Pontuação por dimensão
                            </td>
                            <td className='custom'>
                                <div>
                                    Aspectos Psicológicos
                                </div>
                                <div>
                                    Aspectos Biológicos
                                </div>

                                <div>
                                    Aspectos Sociais
                                </div>

                                <div>
                                    Quedas
                                </div>

                            </td>
                        </tr>
                        <tr className='bg-lgrey'>
                            <td colSpan={3}>Pontuação Máxima</td>
                        </tr>
                        <tr className='bg-lblue'>
                            <td colSpan={3}>Classificação de Risco de Vulnerabilidade Social</td>
                        </tr>
                        <tr className='bg-lgrey'>
                            <td>Risco baixo</td>
                            <td>Risco Moderado</td>
                            <td>Risco Alto</td>
                        </tr>
                    </tbody>
                </Table>

            </Container>
        </>
    );
}
export default PageResultTable;