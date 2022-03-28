import React from 'react';
import './Dashboard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Redirect } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Tabs from '../../Components/Tabs/Tabs';
import { isAuthenticated } from '../../services/auth';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function Dashboard() {
    return isAuthenticated() === false ? <Redirect to='/' /> : (
        
        <Container fluid>
          
            <Tabs active="tools"/> 
            <Row>
            <Card/>
            </Row>
            <Footer/>
        </Container>
      
      
    );
}
export default Dashboard;