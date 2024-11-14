import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const JewelleryForm = () => {
  const [jewelleryData, setJewelleryData] = useState({
    name: '',
    purity: '',
    origin: '',
    purchasePrice: '',
    marketPrice: '',
    sellingPrice: '',
    stockQuantity: '',
    rfidNo: '',
    weight:'',
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
        <Form.Group controlId="formname">
            <Form.Label>Watch Name :</Form.Label>
            <Form.Control type="text" name="name" value={jewelleryData.name} onChange={handleInputChange}>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formUnitPrice">
            <Form.Label>Purity :</Form.Label>
            <Form.Control
              type="text"
              name="purity"
              value={jewelleryData.purity}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Additional Fields */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formWeight">
            <Form.Label>Weight :</Form.Label>
            <Form.Control
              type="text"
              name="weight"
              value={jewelleryData.weight}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formStockQuantity">
            <Form.Label>Stock Quantity</Form.Label>
            <Form.Control
              type="text"
              name="stockQuantity"
              value={jewelleryData.stockQuantity}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>

      </Row>

      {/* Nature dropdown and entry date */}
      <Row className="mb-3">
      
        
      </Row>

       {/*purchaging and selling price */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formPurchagesPrice">
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
          <Form.Group controlId="formSellingPrice">
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

       {/* RFID number*/}
     <Row className="mb-3">
        <Col md={6}>
        <Form.Group controlId="formRfid">
            <Form.Label>RFID Number :</Form.Label>
            <Form.Control
              type="text"
              name="rfidNo"
              value={jewelleryData.rfidNo}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>  

    </div>
  );
};

export default JewelleryForm;
