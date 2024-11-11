// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to dashboard after login
    navigate('/dashboard');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login Account</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username.."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Log In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
