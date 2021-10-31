import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Question = () => {
    return (
      <div style={{backgroundColor:'lightGray'}}>
        <h1
                style={{
            marginTop: "1em",
                  paddingTop:".8em",
                    marginBottom:"1em",
            textAlign: "center",
            fontWeight: "bolder",
            
          }}
        >Frequently Asked Questions </h1>
        <Container style={{
          textAlign: "start",
          padding: ".8em",
          paddingBottom:"1.5em"
          }} >
          <Row>
            <Col xs={6}>
              <div>
                <h5>
                  What if I want to cancel my Inspirato Pass subscription?
                </h5>
                <p>
                  Inspirato Pass requires no long-term commitment. You may
                  cancel your subscription at any time. Please note your
                  subscription must be active to both reserve and travel with
                  your Pass.
                </p>
              </div>
              <div>
                <h5>What service is included with Inspirato Pass?</h5>
                <p>
                  Every Inspirato Pass trip includes first-class personalized
                  service, with pre-trip planning, on-site concierge, and daily
                  housekeeping.
                </p>
              </div>
              <div>
                <h5>
                  How do I use my Pass during times when I am not able to
                  travel?
                </h5>
                <p>
                  We understand that life sometimes gets busy. During times you
                  cannot travel, you can use your Inspirato Pass to order
                  premium lifestyle merchandise and local experiences through
                </p>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <h5>
                  Do I need to make any additional payments when I book trips
                  with Inspirato Pass?
                </h5>
                <p>
                  Your Inspirato Pass covers the nightly rates, taxes, and fees
                  for your Pass trips. You are responsible for 
                  (e.g., airline tickets, rental cars, etc.)
                </p>
              </div>
              <div>
                <h5> Can my family, friends, and colleagues take trips of their own
                  with my Inspirato Pass?
                </h5>
                <p>
                  Yes, if you add one of our sharing plans. Choose the Family
                  Sharing plan for $300/month experience the joy of inviting your family,
                  friends
                </p>
              </div>
              <div>
                <h5>
                  Do I need to make any additional payments when I book trips
                  with Inspirato Pass?
                </h5>
                <p>
                  Inspirato Pass requires no long-term commitment. You may
                  cancel your subscription at any time. Please note your
                  subscription must be your Pass.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Question;