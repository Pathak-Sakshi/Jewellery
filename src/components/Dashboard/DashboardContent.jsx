// src/components/DashboardContent/DashboardContent.js
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import Items from '../Sidebar/sidebarComponents/Items';

function DashboardContent() {
  const [inventoryData, setInventoryData] = useState([]);
  const [totalInventory, setTotalInventory] = useState(0);
  const [loanInventory, setLoanInventory] = useState(0);
  const [saleInventory, setSaleInventory] = useState(0);
  const [karigaarInventory, setKarigaarInventory] = useState(0);

  useEffect(() => {
    // Example data for items
    const initialItems = [
      { id: 1, name: 'Item 1', category: 'Main Inventory', price: 100 },
      { id: 2, name: 'Item 2', category: 'Loan Inventory', price: 200 },
      { id: 3, name: 'Item 3', category: 'Sale Inventory', price: 150 },
      { id: 4, name: 'Item 4', category: 'Karigaar Inventory', price: 50 },
      { id: 5, name: 'Item 5', category: 'Main Inventory', price: 120 },
      { id: 6, name: 'Item 6', category: 'Loan Inventory', price: 250 },
      { id: 7, name: 'Item 7', category: 'Sale Inventory', price: 180 },
      { id: 8, name: 'Item 8', category: 'Main Inventory', price: 110 },
      { id: 9, name: 'Item 9', category: 'Karigaar Inventory', price: 60 },
    ];

    setInventoryData(initialItems);

    // Calculate inventory counts based on item categories
    setTotalInventory(initialItems.filter(items => items.category === 'Main Inventory').length);
    setLoanInventory(initialItems.filter(items => items.category === 'Loan Inventory').length);
    setSaleInventory(initialItems.filter(items => items.category === 'Sale Inventory').length);
    setKarigaarInventory(initialItems.filter(items => items.category === 'Karigaar Inventory').length);
  }, []);

  return (
    <div className="container mt-6">
      <h2 className="mb-4">Home Dashboard</h2>

      {/* Dashboard Cards Section using React-Bootstrap */}
      <Row>
        <Col md={3} className="mb-">
          <Card>
            <Card.Body>
              <Card.Title>Total Inventory</Card.Title>
              <Card.Text>{totalInventory}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Loan Inventory</Card.Title>
              <Card.Text>{loanInventory}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Karigaar Inventory</Card.Title>
              <Card.Text>{karigaarInventory}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body/>
              <Card.Title>Sale Inventory</Card.Title>
              <Card.Text>{saleInventory}</Card.Text>
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

export default DashboardContent;
