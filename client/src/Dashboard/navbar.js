import './navbar.css';
import {React ,useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';




const NavBar = (props) => {


    return (
            
        <Navbar  bg="none" expand="lg">
        <Container>

            <Navbar.Brand href="/" className="app-name" style={{margin:"0px"}}>
            <p style={{ fontWeight:"bold", fontSize:"45px" , marginTop: "0px", marginBottom: "0px"}}>
            <img width="100vw"
                    className="img-fluid align-top d-inline-block app-icon"
                    src={logo}
                    height="40vh" alt="logo"></img>
                Dashboard</p>
            </Navbar.Brand>




    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
           
                
                <Nav className="me-auto justify-content-end flex-grow-1 pe-3 nav-comp">
                <Nav.Link href={props.id1} className='butt'>
            <Button variant="light" className="contact-but" style={{ color:"white", backgroundColor:"#5d3fd3", borderRadius:"15px", }}>
                
            Gst Data</Button>
            </Nav.Link>

            <Nav.Link href={props.id2} className='butt'>
            <Button variant="light" className="contact-but" style={{ color:"white", backgroundColor:"#5d3fd3", borderRadius:"15px", }}>
            GSt Filling</Button>
            </Nav.Link>
            </Nav>
        

    </Navbar.Collapse>
</Container>
</Navbar>

    )
} 


export default NavBar;


