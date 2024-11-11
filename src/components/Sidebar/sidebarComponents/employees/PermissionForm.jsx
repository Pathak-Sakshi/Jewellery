import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

function PermissionForm({ employee, onCancel }) {
  // Initial permissions for each functionality (view, create, edit, delete)
  const initialPermissions = {
    inventory: { view: false, create: false, edit: false, delete: false },
    customer: { view: false, create: false, edit: false, delete: false },
    invoice: { view: false, create: false, edit: false, delete: false },
    loanPerson: { view: false, create: false, edit: false, delete: false },
    karigar: { view: false, create: false, edit: false, delete: false },
    itemTransfer: { view: false, create: false, edit: false, delete: false },
  };

  // Set up state for permissions
  const [permissions, setPermissions] = useState(initialPermissions);

  // Function to handle checkbox changes
  const handlePermissionChange = (category, permissionType) => {
    setPermissions(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [permissionType]: !prevState[category][permissionType], 
      },
    }));
  };

  return (
    <div className="mt-3 mb-4">
      <h3>Permission Form for {employee.name}</h3>

      <Form >
        {/* Permissions Table: View, Create, Edit, Delete in a single row */}
        <Row className="mb-4 mt-4 ms-5">
          <Col sm={3}><strong>Permission</strong></Col>
          <Col sm={2}><strong>View</strong></Col>
          <Col sm={2}><strong>Create</strong></Col>
          <Col sm={2}><strong>Edit</strong></Col>
          <Col sm={2}><strong>Delete</strong></Col>
        </Row>

        {/* Permissions for each category */}
        {Object.keys(permissions).map((category) => (
          <div key={category} className="mb-3">
            <Row>
              {/* Category name */}
              <Col sm={3}><strong>{category.charAt(0).toUpperCase() + category.slice(1)}</strong></Col>

              {/* View, Create, Edit, Delete permissions checkboxes */}
              {['view', 'create', 'edit', 'delete'].map((permissionType) => (
                <Col sm={2} key={permissionType}>
                  <Form.Check
                    type="checkbox"
                    label=""
                    checked={permissions[category][permissionType]}
                    onChange={() => handlePermissionChange(category, permissionType)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        ))}

        {/* Buttons */}
        <Button variant="danger" onClick={onCancel} className="me-2">Back</Button>
        <Button variant="primary">Save</Button>
      </Form>
    </div>
  );
}

export default PermissionForm;
