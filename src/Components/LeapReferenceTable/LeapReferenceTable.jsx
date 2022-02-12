import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
function LeapReferenceTable() {
    return (
        <>
            <Container>
            <label className="h5 m-3">Valores de Referência dos Níveis de Presença</label>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nível de Presença</th>
                            <th>Valor de Referência</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Baixo</td>
                            <td>Entre 0 e 0,3</td>
                            
                        </tr>
                        <tr>
                            <td>Médio</td>
                            <td>Entre 0,3 e 0,7</td>
                            
                        </tr>
                        <tr>
                            <td>Alto</td>
                            <td>Acima de 0,7</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
export default LeapReferenceTable;