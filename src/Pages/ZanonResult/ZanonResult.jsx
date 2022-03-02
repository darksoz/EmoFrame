import {Container} from 'react-bootstrap'
import { Breadcrumb } from "react-bootstrap";
import ZanonBarChart from '../../Components/ZanonBarChart/ZanonBarChart';

let negativeAffects = [1, 4, 5, 7, 10, 11, 12, 16, 18, 19];
let positiveAffects = [2, 3, 6, 8, 9, 13, 14, 15, 17, 20];

function ZanonResult () {

    return (
        <>
                <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item href='./results'>Resultados</Breadcrumb.Item>
                <Breadcrumb.Item active>Resultado ZANON</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <h1>Resultado Zanon</h1>
                <ZanonBarChart/>
            </Container>
       
        </>
    )
}

export default ZanonResult;
