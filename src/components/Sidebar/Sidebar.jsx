import '../Sidebar/Sidebar.css';
import React, { useState } from 'react';
import { Nav, Tab, Row, Collapse } from 'react-bootstrap'; // Added Collapse for dropdown
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Added icons for dropdown toggle

function Sidebar({ 
  onShowItems, 
  onShowEmployees, 
  onShowHome, 
  onShowAddItems, 
  onShowUsers, 
  onShowInvoice, 
  onShowItemTransfer, 
  onShowCustomer,
  onShowLoanPerson,
  onShowKarigar
}) {
  const [openUsers, setOpenUsers] = useState(false); // State to toggle dropdown for Users

  const handleToggleUsers = () => setOpenUsers(!openUsers); // Toggle function for Users dropdown

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

          {/* Dropdown for Users */}
          <Nav.Item className="nav-item users" onClick={handleToggleUsers}>
            <Nav.Link eventKey="users" onClick={onShowUsers}>
              Users
              {openUsers ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </Nav.Link>
          </Nav.Item>

          <Collapse in={openUsers}>
            <div className='sub-users'>
              <Nav.Item className="nav-item customer">
                <Nav.Link eventKey="customer" onClick={onShowCustomer}>Customer</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item loanperson">
                <Nav.Link eventKey="loanperson" onClick={onShowLoanPerson}>Loan Person</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item karigar">
                <Nav.Link eventKey="karigar" onClick={onShowKarigar}>Karigar</Nav.Link>
              </Nav.Item>
            </div>
          </Collapse>

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
