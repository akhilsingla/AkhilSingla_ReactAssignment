import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const NavigationBar = (props) => {

    const loadNewCategory = (category) =>
    {
        props.categoryClicked(category);

    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link href="/" onClick={() => loadNewCategory("movies-in-theaters")}>Movies in theaters</Nav.Link>
                            <Nav.Link href="/" onClick={() => loadNewCategory("movies-coming")}>Coming Soon</Nav.Link>
                            <Nav.Link href="/" onClick={() => loadNewCategory("top-rated-india")}>Top rated indian</Nav.Link>
                            <Nav.Link href="/" onClick={() => loadNewCategory("top-rated-movies")}>Top rated movies</Nav.Link>
                            <Nav.Link href="#Favourites" onClick={loadNewCategory}>Favourites</Nav.Link>
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