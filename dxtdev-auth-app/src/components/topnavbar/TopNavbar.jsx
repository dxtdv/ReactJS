import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { GlobalContext } from '../../contexts/GlobalContext'
import { signOut } from 'firebase/auth'

export default function TopNavbar() {
    const  navigate  = useNavigate()
    const { token, signout } = useContext(GlobalContext)

    const logOut = () => {
        alert("You're about to LogOut")
        signout();
        navigate("/")
    }

    return (
        <Navbar bg='light' expand="lg">
            <Container >
                <LinkContainer to="/">
                    <Navbar.Brand>DXT</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-white">
                        <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown className="pull-right" title="Account" id="basic-nav-dropdown">
                            {token ? (
                                <Button variant='contained' color='error' onClick={logOut}>Logout</Button>
                            ) : (
                                <>
                                    <LinkContainer to="/login">
                                        <NavDropdown.Item  >Login</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/signup">
                                        <NavDropdown.Item  >Sign Up</NavDropdown.Item>
                                    </LinkContainer>
                                </>
                            )}

                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
