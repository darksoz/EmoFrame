import React from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (

        <>
            <Navbar style={{ backgroundColor: "#00bfa5" }}>
                <Container>
                    <Navbar.Brand href="">
                        <img
                            src={`${process.env.PUBLIC_URL}/emoframe.png`}
                            width="60"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse className="justify-content-end"><span class="far fa-user-circle fa-lg"></span>
                        <Nav>
                            <NavDropdown 
                                id="nav-dropdown-dark-example"
                                title="Nome do Usuário"
                                menuVariant="light"
                            > 
                                
                                <NavDropdown.Item href="#action/3.1">Sair</NavDropdown.Item>
                               
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>


        </>

    )
}
