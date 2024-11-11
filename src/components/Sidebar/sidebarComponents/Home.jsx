// src/components/Sidebar/sidebarComponents/Home.js
import React from 'react';
import { Card, Row, Col, Alert } from 'react-bootstrap';

function Home() {
  return (
    <div className="container mt-3">
      <h2 className="mb-4">Home Dashboard</h2>

      {/* Dashboard Cards Section */}
      <Row>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Main Inventory</Card.Title>
              <Card.Text>120</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Loan Inventory</Card.Title>
              <Card.Text>25</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Karigaar</Card.Title>
              <Card.Text>30</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Sale Inventory</Card.Title>
              <Card.Text>50</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Alert for Overdue Items */}
      <Alert variant="warning" className="mt-4">
        <h5>Overdue Items</h5>
        <p>5</p>
      </Alert>
    </div>
  );
}

export default Home;
