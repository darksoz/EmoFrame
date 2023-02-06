import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import UesApp from '../../Components/UesApp/UesApp';
import { Breadcrumb } from "react-bootstrap";

function Ues() {
    return (
        <>
            <Header />
            <Breadcrumb>
                <Breadcrumb.Item href='./dashboard' style={{marginLeft:'12px'}}>Página Inicial</Breadcrumb.Item>
                <Breadcrumb.Item active>UES-BR</Breadcrumb.Item>
            </Breadcrumb>
            <UesApp/>
            <div className='mt-5'>

                <Footer />

            </div>
        </>
    );
}
export default Ues;