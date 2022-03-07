import { useState } from 'react';
import { Container } from 'react-bootstrap';
import SamTable from '../../Components/SamTable/SamTable';

function SamResult() {
    const [data, setData] = useState({});
    let datas = {
        Questions: [
            {
                id: 1,
                answer: 2
            },
            {
                id: 2,
                answer: 5
            },
            {
                id: 3,
                answer: 7
            }
        ]
    }
    return (
        <>
            <h1>Resultado SAM</h1>
            <Container>
               <SamTable Data={datas}/>
            </Container>
        </>
    );
}

export default SamResult;