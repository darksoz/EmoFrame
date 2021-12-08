import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
function LeapResultTable(props) {
    let data = props.Factors;
    data = data.filter(a => a !== undefined);
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
                            <td>{data[0]}</td>
                        </tr>
                        <tr>
                            <td>II</td>
                            <td>Fadiga</td>
                            <td>{data[1]}</td>
                        </tr>
                        <tr>
                            <td>III</td>
                            <td>Esperança</td>
                            <td>{data[2]}</td>
                        </tr>
                        <tr>
                            <td>IV</td>
                            <td>Limerência/Empatia</td>
                            <td>{data[3]}</td>
                        </tr>
                        <tr>
                            <td>V</td>
                            <td>Fisiológico</td>
                            <td>{data[4]}</td>
                        </tr>
                        <tr>
                            <td>VI</td>
                            <td>Repulsa</td>
                            <td>{data[5]}</td>
                        </tr>
                        <tr>
                            <td>VII</td>
                            <td>Interesse</td>
                            <td>{data[6]}</td>
                        </tr>
                        <tr>
                            <td>VIII</td>
                            <td>Surpresa</td>
                            <td>{data[7]}</td>
                        </tr>
                        <tr>
                            <td>IX</td>
                            <td>Fome</td>
                            <td>{data[8]}</td>
                        </tr>
                        <tr>
                            <td>X</td>
                            <td>Limerência/Empatia</td>
                            <td>{data[9]}</td>
                        </tr>
                        <tr>
                            <td>XI</td>
                            <td>Receptividade</td>
                            <td>{data[10]}</td>
                        </tr>
                        <tr>
                            <td>XII</td>
                            <td>Serenidade</td>
                            <td>{data[11]}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
export default LeapResultTable;