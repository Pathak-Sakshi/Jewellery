import React, { useState } from 'react';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';

const Items = () => {
  // Sample data for the items table
  const initialData = {
    mainInventory: [
      { srno: 1, items: 'Item 1', numbers: '4', group: 'group A', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 2, items: 'Item 2', numbers: '8', group: 'group B', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 3, items: 'Item 3', numbers: '1', group: 'group C', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 4, items: 'Item 1', numbers: '4', group: 'group A', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 5, items: 'Item 2', numbers: '8', group: 'group B', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
      { srno: 6, items: 'Item 3', numbers: '1', group: 'group C', description: '....', altcode: 'Alt-1', types: 'jewellery', date: '12/12/2024' },
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

  // State to manage filter inputs
  const [filters, setFilters] = useState({
    items: '',
    numbers: '',
    altcode: '',
    types: '',
    date: '',
    group: '',
    person: ''
  });

  // Function to handle the hover and activate the corresponding inventory list
  const handleInventoryChange = (inventoryType) => {
    setActiveInventory(inventoryType);
  };

  // Function to handle filter input change
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Function to apply filters to data
  const applyFilters = (data) => {
    return data.filter(row => {
      return (
        (filters.items === '' || row.items.toLowerCase().includes(filters.items.toLowerCase())) &&
        (filters.numbers === '' || row.numbers.includes(filters.numbers)) &&
        (filters.altcode === '' || row.altcode.toLowerCase().includes(filters.altcode.toLowerCase())) &&
        (filters.types === '' || row.types.toLowerCase().includes(filters.types.toLowerCase())) &&
        (filters.date === '' || row.date.includes(filters.date)) &&
        (filters.group === '' || row.group.toLowerCase().includes(filters.group.toLowerCase())) &&
        (filters.person === '' || (row.person && row.person.includes(filters.person)))  // Apply filter on person field
      );
    });
  };

  // Function to render the table based on active inventory
  const renderTable = (data) => {
    const filteredData = applyFilters(data);

    // Dynamically set the person column header based on the active inventory
    let personHeader = '';
    if (activeInventory === 'loanInventory') {
      personHeader = 'Loan Person';
    } else if (activeInventory === 'karigarInventory') {
      personHeader = 'Karigar Person';
    } else if (activeInventory === 'saleInventory') {
      personHeader = 'Sale Person';
    }

    return (
      <Table striped bordered hover responsive className='mb-5 mt-2'>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>
              Items
              <Form.Control
                type="text"
                name="items"
                value={filters.items}
                placeholder="Filter by Item"
                onChange={handleFilterChange}
                size="sm"
              />
            </th>
            <th>
              Numbers
              <Form.Control
                type="text"
                name="numbers"
                value={filters.numbers}
                placeholder="Filter by Number"
                onChange={handleFilterChange}
                size="sm"
              />
            </th>
            <th>
              Group
              <Form.Control
                type="text"
                name="group"
                value={filters.group}
                placeholder="Filter by Group"
                onChange={handleFilterChange}
                size="sm"
              />
            </th>
            {activeInventory !== 'mainInventory' && <th>{personHeader}</th>} {/* Dynamically render 'Person' column header */}
            <th>
              Description
              <Form.Control
                type="text"
                name="description"
                value={filters.description || ''}
                placeholder="Filter by Description"
                onChange={handleFilterChange}
                size="sm"
              />
            </th>
            <th>
              Alternative code
              <Form.Control
                type="text"
                name="altcode"
                value={filters.altcode}
                placeholder="Filter by Alt Code"
                onChange={handleFilterChange}
                size="sm"
              />
            </th>
            <th>
              Types
              <Form.Control
                type="text"
                name="types"
                value={filters.types}
                placeholder="Filter by Type"
                onChange={handleFilterChange}
                size="sm"
              />
            </th>
            <th>
              Date
              <Form.Control
                type="text"
                name="date"
                value={filters.date}
                placeholder="Filter by Date"
                onChange={handleFilterChange}
                size="sm"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
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
      <Row className="mb-2 mt-3 g-0">
        <Col className="p-0">
          <Button
            variant={activeInventory === 'mainInventory' ? 'primary' : 'secondary'}
            onClick={() => handleInventoryChange('mainInventory')}
            className="w-100"
          >
            Main Inventory
          </Button>
        </Col>
        <Col className="p-0">
          <Button
            variant={activeInventory === 'loanInventory' ? 'primary' : 'secondary'}
            onClick={() => handleInventoryChange('loanInventory')}
            className="w-100"
          >
            Loan Inventory
          </Button>
        </Col>
        <Col className="p-0">
          <Button
            variant={activeInventory === 'karigarInventory' ? 'primary' : 'secondary'}
            onClick={() => handleInventoryChange('karigarInventory')}
            className="w-100"
          >
            Karigar Inventory
          </Button>
        </Col>
        <Col className="p-0">
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
