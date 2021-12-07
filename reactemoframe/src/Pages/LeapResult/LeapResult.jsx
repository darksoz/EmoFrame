import Container from 'react-bootstrap/Container'
import LeapReferenceTable from '../../Components/LeapReferenceTable/LeapReferenceTable';
import LeapResultTable from '../../Components/LeapResultTable/LeapResultTable';

let pf1 = [3, 10, 12, 13, 21, 23, 24, 25, 26, 29, 31, 35, 39, 40];
let pf2 = [3, 8, 9, 14, 17, 27, 36, 39];
let pf3 = [2, 12, 14, 15, 19, 27, 29, 33];
let pf4 = [2, 5, 10, 14, 19, 28, 33];
let pf5 = [7, 18, 34];
let pf6 = [4, 26, 31, 34, 37, 38];
let pf7 = [2, 3, 4, 12, 22, 27, 28, 32];
let pf8 = [16, 20, 37];
let pf9 = [3, 4, 17, 20, 26, 27, 28, 40];
let pf10 = [23, 27, 28, 30, 40];
let pf11 = [1, 12, 14, 25, 28, 31];
let pf12 = [3, 6, 11, 12];

function LeapResult () {
    return (
        <>
        <Container>
        <h1>Resultado LEAP</h1>

        <LeapReferenceTable/>
        
        <LeapResultTable/>
        </Container>
        
        </>
    );
}

export default LeapResult;