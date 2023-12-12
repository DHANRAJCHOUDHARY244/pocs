import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Navbar/P1-whitebold.png'
import { Button, Grid, Typography } from "@mui/material";
import classes from './assests/index.module.css'
import './assests/nav.css'
const NavBar2 = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary static-header">
                <Container>
                    <Navbar.Brand href="/">
                        <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }} >
                            <Grid item xs={6}> <img
                                alt="Pocs logo"
                                src={logo}
                                width="80"
                                height="70"
                                className="d-inline-block align-top"
                            /></Grid>
                            <Grid item xs={6} style={{ display: 'flex', alignItems: 'center',marginLeft:'-100px'}}><Typography fontSize='25px' level="h1">POCS</Typography> </Grid>
                        </Grid>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className={classes.nav_itemfont}>Home</Nav.Link>
                            <NavDropdown className={classes.nav_itemfont} title="Company" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/about-us">About us</NavDropdown.Item>
                                <NavDropdown.Item href="/our-leadership">
                                    Our Leadership
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/our-technology">
                                    Technologies
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Services" id="collapsible-nav-dropdown" className={classes.nav_itemfont}>
                                <NavDropdown.Item href="/soft-development">Software Development</NavDropdown.Item>
                                <NavDropdown.Item href="/web-development">
                                    Web App Development
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/android-development">Mobile App Development</NavDropdown.Item>
                                <NavDropdown.Item href="/cloud-solution">Cloud Solution</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/portfolio" className={classes.nav_itemfont}>Portfolio</Nav.Link>
                        </Nav>
                        <Nav>

                            <Nav.Link eventKey={2} href="#memes" className={classes.nav_itemfont}>
                            <Button variant="contained"><a style={{color:'white',textDecoration:'none'}} href='contact-us'>Contact Us</a></Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar2