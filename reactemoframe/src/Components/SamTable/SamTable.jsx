
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function SamTable () {
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
                            <td>1</td>
                            <td>1</td> 
                            <td>1</td> 
                            <td>1</td>
                            <td>1</td> 
                            <td>1</td>  
                            <td>1</td>
                            <td>1</td> 
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
                            <td>1</td>
                            <td>1</td> 
                            <td>1</td> 
                            <td>1</td>
                            <td>1</td> 
                            <td>1</td>  
                            <td>1</td>
                            <td>1</td> 
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
                            <td>1</td>
                            <td>1</td> 
                            <td>1</td> 
                            <td>1</td>
                            <td>1</td> 
                            <td>1</td>  
                            <td>1</td>
                            <td>1</td> 
                            <td>1</td>  
                        </tr>
                    </tbody>
                </Table>
                </Container>
        </>
    );
}
export default SamTable;