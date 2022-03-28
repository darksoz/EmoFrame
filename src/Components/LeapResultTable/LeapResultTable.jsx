import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
function LeapResultTable(props) {

    const GetPresenceValue = index => {
        if(props.Factors.length > 0){
            return props.Factors[index];
        }
    }

    const GetPresenceLevel = index => {
        if(props.Factors.length > 0){
            let value = props.Factors[index];
            if(value >= 0 && value < 0.3){
                return "Baixo";
            }
            else if(value >= 0.3 &&  value < 0.7){
                return "Médio";
            }
            else{
                return "Alto";
            }
        }
    }
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
                            <th>Nível de Presença</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I</td>
                            <td>Humilhação/Raiva</td>
                            <td>{GetPresenceValue(0)}</td>
                            <td>{GetPresenceLevel(0)}</td>
                        </tr>
                        <tr>
                            <td>II</td>
                            <td>Fadiga</td>
                            <td>{GetPresenceValue(1)}</td>
                            <td>{GetPresenceLevel(1)}</td>
                        </tr>
                        <tr>
                            <td>III</td>
                            <td>Esperança</td>
                            <td>{GetPresenceValue(2)}</td>
                            <td>{GetPresenceLevel(2)}</td>
                        </tr>
                        <tr>
                            <td>IV</td>
                            <td>Limerência/Empatia</td>
                            <td>{GetPresenceValue(3)}</td>
                            <td>{GetPresenceLevel(3)}</td>
                        </tr>
                        <tr>
                            <td>V</td>
                            <td>Fisiológico</td>
                            <td>{GetPresenceValue(4)}</td>
                            <td>{GetPresenceLevel(4)}</td>
                        </tr>
                        <tr>
                            <td>VI</td>
                            <td>Repulsa</td>
                            <td>{GetPresenceValue(5)}</td>
                            <td>{GetPresenceLevel(5)}</td>
                        </tr>
                        <tr>
                            <td>VII</td>
                            <td>Interesse</td>
                            <td>{GetPresenceValue(6)}</td>
                            <td>{GetPresenceLevel(6)}</td>
                        </tr>
                        <tr>
                            <td>VIII</td>
                            <td>Surpresa</td>
                            <td>{GetPresenceValue(7)}</td>
                            <td>{GetPresenceLevel(7)}</td>
                        </tr>
                        <tr>
                            <td>IX</td>
                            <td>Fome</td>
                            <td>{GetPresenceValue(8)}</td>
                            <td>{GetPresenceLevel(8)}</td>
                        </tr>
                        <tr>
                            <td>X</td>
                            <td>Limerência/Empatia</td>
                            <td>{GetPresenceValue(9)}</td>
                            <td>{GetPresenceLevel(9)}</td>
                        </tr>
                        <tr>
                            <td>XI</td>
                            <td>Receptividade</td>
                            <td>{GetPresenceValue(10)}</td>
                            <td>{GetPresenceLevel(10)}</td>
                        </tr>
                        <tr>
                            <td>XII</td>
                            <td>Serenidade</td>
                            <td>{GetPresenceValue(11)}</td>
                            <td>{GetPresenceLevel(11)}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
export default LeapResultTable;