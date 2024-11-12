import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import JewelleryForm from './JewelleryForm';
import GemstoneForm from './GemstoneForm';
import RudrakshForm from './RudrakshForm';
import WatchForm from './WatchForm';

const AddItemForm = () => {
  const [itemType, setItemType] = useState('');
  const [formData, setFormData] = useState({
    number: '',
    group: '',
    description: '',
    alternativeCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    setItemType(e.target.value);
  };

  const handleBackToSelect = () => {
    setItemType('');
    setFormData({
      number: '',
      group: '',
      description: '',
      alternativeCode: '',
    });
  };

  return (
    <Container>
      <h2 className="mt-4">Add Item Form</h2>
      <Form>
        {/* Show the common form fields only if no item type is selected */}
        {itemType === '' && (
          <>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formNumber">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formGroup">
                  <Form.Label>Group</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item group"
                    name="group"
                    value={formData.group}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAlternativeCode">
                  <Form.Label>Alternative Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter alternative code"
                    name="alternativeCode"
                    value={formData.alternativeCode}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Item Type dropdown */}
            <Form.Group controlId="formItemType" className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" value={itemType} onChange={handleSelectChange}>
                <option value="">Select Type</option>
                <option value="Jewellery">Jewellery</option>
                <option value="Gemstone">Gemstone</option>
                <option value="Rudraksh">Rudraksh</option>
                <option value="Watch">Watch</option>
              </Form.Control>
            </Form.Group>
          </>
        )}

        {/* Hide the common fields and show specific form based on the item type */}
        {itemType === 'Jewellery' && <JewelleryForm />}
        {itemType === 'Gemstone' && <GemstoneForm />}
        {itemType === 'Rudraksh' && <RudrakshForm />}
        {itemType === 'Watch' && <WatchForm />}

        {/* Show "Back" button when an item type is selected to go back to the selection stage */}
        {itemType !== '' && (
          <Button variant="danger" onClick={handleBackToSelect} className="mt-3">
            Back 
          </Button>
        )}

        {/* Submit Button */}
        {itemType !== '' && (
          <Button variant="primary" type="submit" className="mt-3">
            Done
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default AddItemForm;
