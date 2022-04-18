import React from "react";
import {Navbar, Container, Nav, Form, FormControl, Button, NavDropdown} from "react-bootstrap";

const NavigationBar = () =>
{
    return(
        <>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#Movies in theaters">Movies in theaters</Nav.Link>
                            <Nav.Link href="#Coming Soon">Coming Soon</Nav.Link>
                            <Nav.Link href="#Top rated indian">Top rated indian</Nav.Link>
                            <Nav.Link href="#Top rated movies">Top rated movies</Nav.Link>
                            <Nav.Link href="#Favourites">Favourites</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </>
    );

}

export default NavigationBar;