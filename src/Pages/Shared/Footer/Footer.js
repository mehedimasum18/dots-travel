import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h1 className="footer_logo">Dot's Travel </h1>
              <h4>Enjoy your life With Us </h4>
            </Col>
            <Col xs={6} md={4}>
              <h2>Support</h2>
              <div>
                <h5>Contact Us </h5>
                <h5>FAQ</h5>
                <h5>Discount Info</h5>
              </div>
            </Col>
            <Col xs={6} md={4}>
                <h2>Visit Our Office</h2>
                        <h6>32, South Mugda, Dhaka, Bangladesh.</h6>
                        <h6>Mobile: 015000000</h6>
                    <h6>Email: dotsdevbd@gmail.com </h6>    
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;