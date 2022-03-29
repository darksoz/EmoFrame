import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { LogoutAccount } from '../../services/api';
import { RediretToPage } from '../../services/utils';
import { getToken, getUsername, logout } from '../../services/auth';
import { useLocation } from 'react-router-dom';

export default function Header() {
    console.log("route => ", window.location.pathname)
    const LoginUserName = () => {
        let username = getUsername().split(' ');
        let firstName = username[0];
        let lastName = username[username.length - 1];
        return `${firstName} ${lastName}`;
    }

    const handleLogout = async () => {
        await LogoutAccount();
        logout();
        RediretToPage('/');
    }
    return (

        <>
            {
                window.location.pathname !== "/" &&
                <>
                    <Navbar style={{ backgroundColor: "#00bfa5" }}>
                        <Container>
                            <Navbar.Brand href="/dashboard">
                                <img
                                    src={`${process.env.PUBLIC_URL}/emoframe.png`}
                                    width="60"
                                    className="d-inline-block align-top"
                                    alt=""
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            {
                                (getToken() !== null) &&
                                <div>
                                    <Navbar.Collapse className="justify-content-end"><span class="far fa-user-circle fa-lg"></span>
                                        <Nav>
                                            <NavDropdown
                                                id="nav-dropdown-dark-example"
                                                title={LoginUserName()}
                                                menuVariant="light"
                                            >
                                                <NavDropdown.Item onClick={handleLogout}>Sair</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </div>
                            }
                        </Container>
                    </Navbar>
                </>
            }
            {
                window.location.pathname === "/" && <></>
            }
        </>

    )
}
