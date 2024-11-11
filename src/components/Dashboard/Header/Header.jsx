import React from 'react';
import { Navbar, FormControl, Button, InputGroup } from 'react-bootstrap'; 
import { Bell, Gear, Person } from 'react-bootstrap-icons';

function Header() {
  return (
    <Navbar className="sticky-top bg-secondary p-3 d-flex justify-content-between">
      {/* Search Field */}
      <InputGroup style={{ maxWidth: '300px' }}>
        <FormControl
          placeholder="Search..."
          aria-label="Search"
        />
      </InputGroup>

      {/* Icons Section */}
      <div>
        <Button variant="link" className="me-5">
          <Bell color="white"/>
        </Button>
        <Button variant="link" className="me-5">
          <Gear color="white"/>
        </Button>
        <Button variant="link" className="me-5">
          <Person color="white"/>
        </Button>
      </div>
    </Navbar>
  );
}

export default Header;
