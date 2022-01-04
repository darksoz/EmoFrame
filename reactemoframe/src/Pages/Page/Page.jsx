import React from 'react';
import './Page.css';
import { Breadcrumb } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import PsychologicalAspect from '../../Components/PsychologicalAspect/PsychologicalAspect';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Page() {
    return (
        <>
            <Container>
                <h1>AVALIAÇÃO DE RISCO DE VULNERABILIDADE BIOPSICOSSOACIAL EM IDOSOS</h1>
                <PsychologicalAspect />




            </Container>
        </>
    );
}
export default Page;