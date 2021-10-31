import React from 'react';
import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
      <>
        <Navbar
          style={{ color: "#eb2f06" }}
          bg="light"
          variant="dark"
          sticky="top"
          collapseOnSelect
          expand="lg"
        >
          <Container style={{ fontWeight: "bolder" }}>
            <Navbar.Brand
              style={{fontWeight: "bolder", fontSize: "1.5em", color: "#cd6133", }}
              href="#home" > Dot's Travel
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#experts">
                Manage All Order
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#experts">
                My Order
              </Nav.Link>
              {/* {user?.email ? (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;



