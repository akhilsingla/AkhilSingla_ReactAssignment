import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavigationBar = (props) => {

    const loadNewCategory = (category) =>
    {
        props.categoryClicked(category);

    }

    const searchMovies = (event) =>
    {
        console.log(event.target.value);
        props.searchStr(event.target.value);

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
                            <Link to="/" onClick={() => loadNewCategory("movies-in-theaters")}>Movies in theaters</Link> |
                            <Link to="/" onClick={() => loadNewCategory("movies-coming")}>Coming Soon</Link> |
                            <Link to="/" onClick={() => loadNewCategory("top-rated-india")}>Top rated indian</Link> |
                            <Link to="/" onClick={() => loadNewCategory("top-rated-movies")}>Top rated movies</Link> |
                            <Nav.Link href="#Favourites" onClick={loadNewCategory}>Favourites</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            {/*<FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={() => searchMovies("a")}
                            />*/}

                        </Form>
                        <input type="search" onChange={(event) => searchMovies(event)}></input>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default NavigationBar;