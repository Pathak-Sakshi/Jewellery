import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center py-5">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Your Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );  
}

export default Footer;
