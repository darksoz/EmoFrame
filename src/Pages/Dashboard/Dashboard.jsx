import React from 'react';
import './Dashboard.css';
import { Breadcrumb } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import { Redirect } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Tabs from '../../Components/Tabs/Tabs';
import { isAuthenticated } from '../../services/auth';
import Footer from '../../Components/Footer/Footer';

function Dashboard() {
    return isAuthenticated() === false ? <Redirect to='/' /> : (
        <Container fluid>
           <Breadcrumb>
            <Breadcrumb.Item active>Página Inicial</Breadcrumb.Item>
            </Breadcrumb>
            <Tabs active="tools"/> 
            <div class="row m-3">
                <Card />
            </div>
            <Footer/>
        </Container>
    )
}
export default Dashboard;