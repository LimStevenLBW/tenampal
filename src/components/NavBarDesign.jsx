import React from 'react'
import fb from '../media/fb.svg';
import yelp from '../media/yelp.svg';
import insta from '../media/insta.svg';
import logo_trans from '../media/logo_trans.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarDesign = () => {

    return (
        <React.Fragment>
            <Navbar bg="light" expand="md">

                <Navbar.Brand href="#home">
                    <img className="img-logo" src={logo_trans}></img>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto  w-100 justify-content-center ">
                        <Nav.Link href="#home">Menu</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Location</Nav.Link>
                        <Nav.Link href="#link">COVID-19</Nav.Link>
                    </Nav>

                    <Nav className="me-auto">
                        <Nav.Link href="https://www.yelp.com/biz/tenampal-los-angeles"><img src={yelp} alt="social-y" className="App-Social-Icon" /></Nav.Link>
                        <Nav.Link href="https://www.facebook.com/"><img src={fb} alt="social-f" className="App-Social-Icon" /></Nav.Link>
                        <Nav.Link href="https://www.instagram.com/"><img src={insta} alt="social-i" className="App-Social-Icon" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </React.Fragment >
    );
}

export default NavBarDesign;