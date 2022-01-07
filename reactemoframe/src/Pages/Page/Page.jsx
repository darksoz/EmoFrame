import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import PsychologicalAspect from '../../Components/PsychologicalAspect/PsychologicalAspect';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BiologicalAspect from '../../Components/BiologicalAspect/BiologicalAspect';
import SocialAspect from '../../Components/SocialAspect/SocialAspect';
import MultidimensionalAspect from '../../Components/MultidimensionalAspect/MultidimensionalAspect';

function Page() {
    return (
        <>
            <Container>
                <h1>AVALIAÇÃO DE RISCO DE VULNERABILIDADE BIOPSICOSSOACIAL EM IDOSOS</h1>
                <PsychologicalAspect />
                <BiologicalAspect/>
                <SocialAspect/>
                <MultidimensionalAspect/>
            </Container>
        </>
    );
}
export default Page;