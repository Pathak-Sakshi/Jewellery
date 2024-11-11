import React, { useState } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap'; // Import React-Bootstrap Table and Button

const Items = () => {
  // Sample data for the items table
  const initialData = {
    mainInventory: [
      { srno: 1, items: 'Item 1', numbers: '4', group: 'group A', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 2, items: 'Item 2', numbers: '8', group: 'group B', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 3, items: 'Item 3', numbers: '1', group: 'group C', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
    ],
    loanInventory: [
      { srno: 1, items: 'Item 1', numbers: '5', group: 'group A', person: '100', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 2, items: 'Item 2', numbers: '7', group: 'group B', person: '150', description: '....', altcode: 'Alt-2', types: 'jewellery', date: '12/12/2024' },
    ],
    karigarInventory: [
      { srno: 1, items: 'Item 1', numbers: '4', group: 'group A', person: '100', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 2, items: 'Item 2', numbers: '6', group: 'group B', person: '200', description: '....', altcode: 'Alt-2', types: 'jewellery', date: '12/12/2024' },
    ],
    saleInventory: [
      { srno: 1, items: 'Item 1', numbers: '3', group: 'group A', person: '120', description: '....', altcode: 'Alt-3', types: 'jewellery', date: '12/12/2024' },
      { srno: 2, items: 'Item 2', numbers: '10', group: 'group B', person: '250', description: '....', altcode: 'Alt-3', types: 'jewellery', date: '12/12/2024' },
    ]
  };

  // State to manage the active inventory type
  const [activeInventory, setActiveInventory] = useState('mainInventory');

  // Function to handle the hover and activate the corresponding inventory list
  const handleInventoryChange = (inventoryType) => {
    setActiveInventory(inventoryType);
  };

  // Function to render the table based on active inventory
  const renderTable = (data) => {
    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Items</th>
            <th>Numbers</th>
            <th>Group</th>
            {activeInventory !== 'mainInventory' && <th>Person</th>} {/* Conditionally render 'Person' column */}
            <th>Description</th>
            <th>Alternative code</th>
            <th>Types</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.srno}>
              <td>{row.srno}</td>
              <td>{row.items}</td>
              <td>{row.numbers}</td>
              <td>{row.group}</td>
              {activeInventory !== 'mainInventory' && <td>{row.person}</td>} {/* Conditionally render 'Person' column */}
              <td>{row.description}</td>
              <td>{row.altcode}</td>
              <td>{row.types}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  // Get the appropriate data based on the active inventory type
  const getActiveData = () => {
    switch (activeInventory) {
      case 'loanInventory':
        return initialData.loanInventory;
      case 'karigarInventory':
        return initialData.karigarInventory;
      case 'saleInventory':
        return initialData.saleInventory;
      default:
        return initialData.mainInventory;
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-4">Items List</h2>

      {/* Inventory Toggle Buttons */}
      <Row className="mb-3 d-flex justify-content-center g-3">
        <Col>
          <Button
            variant={activeInventory === 'mainInventory' ? 'primary' : 'secondary'}
            onClick={() => handleInventoryChange('mainInventory')}
            className="w-100"
          >
            Main Inventory
          </Button>
        </Col>
        <Col>
          <Button
            variant={activeInventory === 'loanInventory' ? 'primary' : 'secondary'}
            onClick={() => handleInventoryChange('loanInventory')}
            className="w-100"
          >
            Loan Inventory
          </Button>
        </Col>
        <Col>
          <Button
            variant={activeInventory === 'karigarInventory' ? 'primary' : 'secondary'}
            onClick={() => handleInventoryChange('karigarInventory')}
            className="w-100"
          >
            Karigar Inventory
          </Button>
        </Col>
        <Col>
          <Button
            variant={activeInventory === 'saleInventory' ? 'primary' : 'secondary'}
            onClick={() => handleInventoryChange('saleInventory')}
            className="w-100"
          >
            Sale Inventory
          </Button>
        </Col>
      </Row>

      {/* Table Section using React-Bootstrap's Table component */}
      {renderTable(getActiveData())}
    </div>
  );
};

export default Items;
