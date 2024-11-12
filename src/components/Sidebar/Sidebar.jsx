import '../Sidebar/Sidebar.css';
import React from 'react';
import { Nav, Tab, Row } from 'react-bootstrap';

function Sidebar({ onShowItems, onShowEmployees, onShowHome, onShowAddItems, onShowUsers, onShowInvoice, onShowItemTransfer }) {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="home">
      <h2 className="sidebar-header bg-secondary">Inventory</h2>  
      <Row>
          <Nav variant="pills" className="flex-column nav-items">
            <Nav.Item className="nav-item home">
              <Nav.Link eventKey="home" onClick={onShowHome}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item employees">
              <Nav.Link eventKey="employees" onClick={onShowEmployees}>Employees</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item items">
              <Nav.Link eventKey="items" onClick={onShowItems}>Items</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item additems">
              <Nav.Link eventKey="additems" onClick={onShowAddItems}>Add Items</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item users">
              <Nav.Link eventKey="users" onClick={onShowUsers}>Users</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item invoice">
              <Nav.Link eventKey="invoice" onClick={onShowInvoice}>Invoice</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item itemTransfer">
              <Nav.Link eventKey="itemTransfer" onClick={onShowItemTransfer}>Item Transfer</Nav.Link>
            </Nav.Item>
          </Nav>
      </Row>
    </Tab.Container>
  );
}

export default Sidebar;
