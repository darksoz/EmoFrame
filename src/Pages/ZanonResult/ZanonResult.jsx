import {Container} from 'react-bootstrap'
import { Breadcrumb } from "react-bootstrap";
import ZanonBarChart from '../../Components/ZanonBarChart/ZanonBarChart';

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
