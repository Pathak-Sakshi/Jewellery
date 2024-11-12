import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const JewelleryForm = () => {
  const [jewelleryData, setJewelleryData] = useState({
    jewelleryName: '',
    material: '',
    purity: '',
    origin: '',
    purchasePrice: '',
    sellingPrice: '',
    stockQuantity: '',
    rfidNo: '',
    nature: '',
    photos: [],
    otheritems:'',
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
    
     {/* RFID number*/}
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
        <Form.Group controlId="formNature">
            <Form.Label>Gemstone/Rudraksh</Form.Label>
            <Form.Control as="select" name="otheritems" value={jewelleryData.otheritems} onChange={handleInputChange}>
              <option value="">Select items</option>
              <option value="natural">Gemstone</option>
              <option value="heated">Rudraksh</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row> 

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
        <Form.Group controlId="formNature">
            <Form.Label>Material</Form.Label>
            <Form.Control as="select" name="material" value={jewelleryData.material} onChange={handleInputChange}>
              <option value="">Select Material</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="brass">Brass</option>
              <option value="copper">Copper</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Additional Fields */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formPurity">
            <Form.Label>Material Purity</Form.Label>
            <Form.Control
              type="text"
              name="purity"
              value={jewelleryData.purity}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="formNature">
            <Form.Label>Origin</Form.Label>
            <Form.Control as="select" name="origin" value={jewelleryData.origin} onChange={handleInputChange}>
              <option value="">Select country</option>
              <option value="natural">India</option>
              <option value="heated">Us</option>
              <option value="treated">Russia</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Nature dropdown and entry date */}
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

       {/*purchaging and selling price */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formPurity">
            <Form.Label>Purchages price</Form.Label>
            <Form.Control
              type="text"
              name="purchasePrice"
              value={jewelleryData. purchasePrice}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formOrigin">
            <Form.Label>Selling price</Form.Label>
            <Form.Control
              type="text"
              name="sellingPrice"
              value={jewelleryData.sellingPrice}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      
      {/* Include File Upload for Photos */}
      <Row className="mb-3">
      <Col md={6}>
          <Form.Group controlId="formOrigin">
            <Form.Label>Stock Quantity</Form.Label>
            <Form.Control
              type="text"
              name="stockQuantity"
              value={jewelleryData.stockQuantity}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
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

    </div>
  );
};

export default JewelleryForm;
