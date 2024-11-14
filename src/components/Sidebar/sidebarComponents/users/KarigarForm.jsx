import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function KarigarForm({ karigar, onCancel, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    altMobileNo:'',
    address:'',
    status: 'active',
  });

  useEffect(() => {
    if (karigar) {
      setFormData(karigar); // Populate form if editing
    }
  }, [karigar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass form data to parent component
  };

  return (
    <div>
      <h3 className="mt-1 p-4 bg-secondary text-white">
        {karigar ? 'Edit Karigar' : 'New Karigar'}
      </h3>
      <Form className="container p-4 mb-4 shadow-sm rounded bg-white" onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="mobileNo">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="altMobileNo">
          <Form.Label>Alt Mobile No.</Form.Label>
          <Form.Control
            type="text"
            name="altMobileNo"
            value={formData.altMobileNo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Form.Control>
        </Form.Group>
        <Button className="mt-3" variant="danger" onClick={onCancel}>Back</Button>{' '}
        <Button className="mt-3" variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default KarigarForm;
