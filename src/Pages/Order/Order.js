
import React from 'react';
import { Col,Button, Container, Row, Table } from 'react-bootstrap';

const Order = () => {
    return (
      <div id="myOrder" style={{padding:"1em", }}>
        <Container fluid="md">
          <Row>
            <Col>
              {" "}
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th> Name</th>
                    <th>Phone </th>
                    <th>Email </th>
                    <th>Price:$ </th>
                    <th>Status</th>
                    <th>Action </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>

                    <td className="bg-success">
                      <Button variant="success">Approved</Button>
                    </td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                 
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Order;