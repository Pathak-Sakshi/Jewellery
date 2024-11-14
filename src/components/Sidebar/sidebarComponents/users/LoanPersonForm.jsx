import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function LoanPersonForm({ loanPerson, onCancel, onSave }) {
  const [formData, setFormData] = useState({
    LoanPerson: '',
    companyName: '',
    mobileNo: '',
    altMobileNo: '',
    address: '',
    gstNo: '',
    customerType: 'retailer',
  });

  useEffect(() => {
    if (loanPerson) {
      setFormData(loanPerson); // Populate form if editing
    }
  }, [loanPerson]);

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
        {loanPerson ? 'Edit Loan Person' : 'New Loan Person'}
      </h3>
      <Form className="container p-4 mb-4 shadow-sm rounded bg-white" onSubmit={handleSubmit}>
        <Form.Group controlId="LoanPersoname">
          <Form.Label>Loan Person Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.LoanPerson}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            name="companyName"
            value={formData.companyName}
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
        <Form.Group controlId="gstNo">
          <Form.Label>GST No.</Form.Label>
          <Form.Control
            type="text"
            name="gstNo"
            value={formData.gstNo}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="customerType">
          <Form.Label>Customer Type</Form.Label>
          <Form.Control
            as="select"
            name="customerType"
            value={formData.customerType}
            onChange={handleChange}
            required
          >
            <option value="retailer">Retailer</option>
            <option value="wholesaler">Wholesaler</option>
          </Form.Control>
        </Form.Group>
        <Button className="mt-3" variant="danger" onClick={onCancel}>Back</Button>{' '}
        <Button className="mt-3" variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default LoanPersonForm;
