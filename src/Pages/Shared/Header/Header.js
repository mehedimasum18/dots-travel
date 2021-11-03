import React from 'react';
import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
  const { currentUser, logOut } = useFirebase();
  console.log(currentUser);
    return (
      <>
        <Navbar
          style={{ color: "#eb2f06" }}
          bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container style={{ fontWeight: "bolder" }}>
            <Navbar.Brand
              style={{
                fontWeight: "bolder",  fontSize: "1.5em", color: "#cd6133", }} href="#home" >
           
              Dot's Travel
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/manageOrder">
                Manage All Order
              </Nav.Link>
              <Nav.Link as={Link} to="/myOrder">
                My Order
              </Nav.Link>
              {currentUser?.email ? (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (    
                    <Nav.Link as={Link} to="/login">
                  Login
                  </Nav.Link>
              )}
             
              <Navbar.Text style={{paddingLeft:"1em"}}>
                <div className="align-items-center justify-content-center d-flex">
                  <h6 className to="/login"> {currentUser?.displayName} </h6>
                 <img style={{ width: "50px" }}  className="rounded-circle mx-3"
                    src={currentUser?.photoURL} alt=""/>
                </div>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;



