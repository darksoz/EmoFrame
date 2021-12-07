import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
function LeapResultTable() {
    return (
        <>
            <Container>
                <label className="h5 m-3">Resultado LEAP</label>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fator</th>
                            <th>Valor de Presença</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I</td>
                            <td>Humilhação/Raiva</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>II</td>
                            <td>Fadiga</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>III</td>
                            <td>Esperança</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>IV</td>
                            <td>Limerência/Empatia</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>V</td>
                            <td>Fisiológico</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>VI</td>
                            <td>Repulsa</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>VII</td>
                            <td>Interesse</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>VIII</td>
                            <td>Surpresa</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>IX</td>
                            <td>Fome</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>X</td>
                            <td>Limerência/Empatia</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>XI</td>
                            <td>Receptividade</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>XII</td>
                            <td>Serenidade</td>
                            <td>X</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
export default LeapResultTable;