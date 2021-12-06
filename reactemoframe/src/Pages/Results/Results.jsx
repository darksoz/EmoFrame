import React from 'react';
import Tabs from '../../Components/Tabs/Tabs';
import { Breadcrumb } from "react-bootstrap";

function Results() {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard'>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>Resultados</Breadcrumb.Item>
            </Breadcrumb>
            <Tabs active="results"/>
            <h1>Results</h1>           
        </div>
    );
}
export default Results;
