import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import SamTable from '../../Components/SamTable/SamTable';

function SamResult() {
    return (
        <>
            <h1>Resultado SAM</h1>
            <Container>
               <SamTable/>
            </Container>
        </>
    );
}

export default SamResult;