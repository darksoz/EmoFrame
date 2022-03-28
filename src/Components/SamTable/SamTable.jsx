import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function SamTable(props) {

    const GetReult = (ref, value) =>{
        if(props.Data.length > 0){
            if((ref - props.Data[value].answer) !== 0){
                return 0;
            }
            else{
                return 1;
            }
        }
    }

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
                            <td>{GetReult(1, 2)}</td>
                            <td>{GetReult(2, 2)}</td>
                            <td>{GetReult(3, 2)}</td>
                            <td>{GetReult(4, 2)}</td>
                            <td>{GetReult(5, 2)}</td>
                            <td>{GetReult(6, 2)}</td>
                            <td>{GetReult(7, 2)}</td>
                            <td>{GetReult(8, 2)}</td>
                            <td>{GetReult(9, 2)}</td>
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
                            <td>{GetReult(1, 1)}</td>
                            <td>{GetReult(2, 1)}</td>
                            <td>{GetReult(3, 1)}</td>
                            <td>{GetReult(4, 1)}</td>
                            <td>{GetReult(5, 1)}</td>
                            <td>{GetReult(6, 1)}</td>
                            <td>{GetReult(7, 1)}</td>
                            <td>{GetReult(8, 1)}</td>
                            <td>{GetReult(9, 1)}</td>
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
                            <td>{GetReult(1, 0)}</td>
                            <td>{GetReult(2, 0)}</td>
                            <td>{GetReult(3, 0)}</td>
                            <td>{GetReult(4, 0)}</td>
                            <td>{GetReult(5, 0)}</td>
                            <td>{GetReult(6, 0)}</td>
                            <td>{GetReult(7, 0)}</td>
                            <td>{GetReult(8, 0)}</td>
                            <td>{GetReult(9, 0)}</td>
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