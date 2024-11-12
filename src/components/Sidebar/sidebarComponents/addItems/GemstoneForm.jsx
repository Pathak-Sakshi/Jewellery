import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const JewelleryForm = () => {
  const [jewelleryData, setJewelleryData] = useState({
    jewelleryName: '',
    unitPrice: '',
    size: '',
    origin: '',
    purchasePrice: '',
    sellingPrice: '',
    stockQuantity: '',
    rfidNo: '',
    color: '',
    weight:'',
    photos: [],
    otheritems:'',
    dimensions:'',
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
            <Form.Label>RFID Number :</Form.Label>
            <Form.Control
              type="text"
              name="rfidNo"
              value={jewelleryData.rfidNo}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formUnitPrice">
            <Form.Label>Unit Price :</Form.Label>
            <Form.Control
              type="text"
              name="unitPrice"
              value={jewelleryData.unitPrice}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        
      </Row> 

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formJewelleryName">
            <Form.Label>Jewellery Name :</Form.Label>
            <Form.Control
              type="text"
              name="jewelleryName"
              value={jewelleryData.jewelleryName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="formShape">
            <Form.Label>Shape :</Form.Label>
            <Form.Control as="select" name="shape" value={jewelleryData.shape} onChange={handleInputChange}>
              <option value="">Select shape</option>
              <option value="gold">shape 1</option>
              <option value="silver">shape 2</option>
              <option value="brass">shape 3</option>
              <option value="copper">shape 4</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Additional Fields */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formSize">
            <Form.Label>Size :</Form.Label>
            <Form.Control
              type="text"
              name="size"
              value={jewelleryData.size}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="formOrigin">
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
      {/* ..............shape and size fields ............ */}
      <Row className="mb-3">
        <Col md={6}>
        <Form.Group controlId="formColor">
            <Form.Label>Color :</Form.Label>
            <Form.Control
              type="text"
              name="color"
              value={jewelleryData.color}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formWieght">
            <Form.Label>Weight :</Form.Label>
            <Form.Control
              type="text"
              name="weight"
              value={jewelleryData.weight}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        
      </Row> 

      {/* Nature dropdown and entry date */}
      <Row className="mb-3">
        <Col md={6}>
        <Form.Group controlId="formDimensions">
            <Form.Label>Dimensions</Form.Label>
            <Form.Control 
                type="text" 
                name="dimensions" 
                value={jewelleryData.dimensions} 
                onChange={handleInputChange} />
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
          <Form.Group controlId="formPurchasesPrice">
            <Form.Label>Purchases price</Form.Label>
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
