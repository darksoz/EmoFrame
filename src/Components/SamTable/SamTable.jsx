
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function SamTable() {
    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="9">Domínio da Satisfação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='bg-danger'>P1(-)</td>
                            <td className='bg-danger'>P2(-)</td>
                            <td className='bg-danger'>P3(-)</td>
                            <td className='bg-danger'>P4(-)</td>
                            <td className='bg-warning'>P5(0)</td>
                            <td className='bg-success'>P6(+)</td>
                            <td className='bg-success'>P7(+)</td>
                            <td className='bg-success'>P8(+)</td>
                            <td className='bg-success'>P9(+)</td>
                        </tr>

                        <tr>

                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="9"> Domínio da Motivação </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className='bg-danger'>P1(-)</td>
                            <td className='bg-danger'>P2(-)</td>
                            <td className='bg-danger'>P3(-)</td>
                            <td className='bg-danger'>P4(-)</td>
                            <td className='bg-warning'>P5(0)</td>
                            <td className='bg-success'>P6(+)</td>
                            <td className='bg-success'>P7(+)</td>
                            <td className='bg-success'>P8(+)</td>
                            <td className='bg-success'>P9(+)</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="9"> Domínio do Sentimento de Controle </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className='bg-danger'>P1(-)</td>
                            <td className='bg-danger'>P2(-)</td>
                            <td className='bg-danger'>P3(-)</td>
                            <td className='bg-danger'>P4(-)</td>
                            <td className='bg-warning'>P5(0)</td>
                            <td className='bg-success'>P6(+)</td>
                            <td className='bg-success'>P7(+)</td>
                            <td className='bg-success'>P8(+)</td>
                            <td className='bg-success'>P9(+)</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

            <span className='bg-danger'> &nbsp;&nbsp;&nbsp; </span> &nbsp; Tendência Negativa &nbsp; 
            <span className='bg-warning'>&nbsp;&nbsp;&nbsp; </span> &nbsp;Tendência Neutra &nbsp;
            <span className='bg-success'>&nbsp;&nbsp;&nbsp; </span> &nbsp;Tendência positiva &nbsp;

        </>
    );
}
export default SamTable;