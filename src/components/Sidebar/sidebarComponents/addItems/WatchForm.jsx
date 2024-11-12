import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const JewelleryForm = () => {
  const [jewelleryData, setJewelleryData] = useState({
    jewelleryName: '',
    material: '',
    purity: '',
    origin: '',
    totalWeight: '',
    purchasePrice: '',
    sellingPrice: '',
    stockQuantity: '',
    rfidNo: '',
    nature: '',
    photos: [],
    entryDateTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJewelleryData({
      ...jewelleryData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setJewelleryData({
      ...jewelleryData,
      photos: Array.from(e.target.files),
    });
  };

  return (
    <div className="dynamic-fields">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formJewelleryName">
            <Form.Label>Jewellery Name</Form.Label>
            <Form.Control
              type="text"
              name="jewelleryName"
              value={jewelleryData.jewelleryName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formMaterial">
            <Form.Label>Material</Form.Label>
            <Form.Control
              type="text"
              name="material"
              value={jewelleryData.material}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Additional Fields */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formPurity">
            <Form.Label>Purity</Form.Label>
            <Form.Control
              type="text"
              name="purity"
              value={jewelleryData.purity}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formOrigin">
            <Form.Label>Origin</Form.Label>
            <Form.Control
              type="text"
              name="origin"
              value={jewelleryData.origin}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Add the rest of the jewellery fields... */}
      {/* Include File Upload for Photos */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formPhotos">
            <Form.Label>Photos</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <Form.Text className="text-muted">You can upload up to 4 photos, 1 is mandatory.</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      {/* Nature dropdown */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formNature">
            <Form.Label>Nature</Form.Label>
            <Form.Control as="select" name="nature" value={jewelleryData.nature} onChange={handleInputChange}>
              <option value="">Select Nature</option>
              <option value="natural">Natural</option>
              <option value="heated">Heated</option>
              <option value="treated">Treated</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* RFID number and entry date */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formRfid">
            <Form.Label>RFID Number</Form.Label>
            <Form.Control
              type="text"
              name="rfidNo"
              value={jewelleryData.rfidNo}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formEntryDateTime">
            <Form.Label>Entry Date & Time</Form.Label>
            <Form.Control
              type="datetime-local"
              name="entryDateTime"
              value={jewelleryData.entryDateTime}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default JewelleryForm;
