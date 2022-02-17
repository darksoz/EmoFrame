import {Container} from 'react-bootstrap'
import { Breadcrumb } from "react-bootstrap";
import PanasBarChart from '../../Components/PanasBarChart/PanasBarChart';

function PanasResult () {
    return (
        <>
        <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item href='./results'>Resultados</Breadcrumb.Item>
                <Breadcrumb.Item active>Resultado PANAS</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <h1>Resultado Panas</h1>
                <PanasBarChart/>
            </Container>
        </>
    );
}

export default PanasResult;