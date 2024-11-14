import React, { useState } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';
import CustomerForm from './CustomerForm';

function Customers() {
  const [view, setView] = useState('list'); // Toggle between views
  const [selectedCustomer, setSelectedCustomer] = useState(null); // Track selected customer

  // Sample data for customers
  const [customers, setCustomers] = useState([
    { id: 1, customerName: 'ABC Corp', companyName: 'ABC Ltd.', mobileNo: '9876543210', altMobileNo: '1234567890', address: '123 Street, City', gstNo: 'GST123', customerType: 'retailer' },
    { id: 2, customerName: 'XYZ Pvt Ltd', companyName: 'XYZ Corp', mobileNo: '8765432109', altMobileNo: '2345678901', address: '456 Avenue, City', gstNo: 'GST456', customerType: 'wholesaler' }
  ]);

  // Function to handle view changes
  const handleNewCustomer = () => setView('add');
  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    setView('edit');
  };

  // Render the main content based on the view state
  const renderContent = () => {
    switch (view) {
      case 'list':
        return (
          <div className='p-4'>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
              <h3>Customer List</h3>
              <Button variant="primary" onClick={handleNewCustomer}>New Customer</Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Company Name</th>
                  <th>Mobile No.</th>
                  <th>GST No.</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.customerName}</td>
                    <td>{customer.companyName}</td>
                    <td>{customer.mobileNo}</td>
                    <td>{customer.gstNo}</td>
                    <td>{customer.customerType}</td>
                    <td>
                      <div className="d-flex justify-content-end align-items-center gap-4 p-1">
                        <Dropdown>
                          <Dropdown.Toggle variant="primary">Actions</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteCustomer(customer.id)}>Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        );
      case 'add':
        return <CustomerForm onCancel={() => setView('list')} onSave={addCustomer} />;
      case 'edit':
        return <CustomerForm customer={selectedCustomer} onCancel={() => setView('list')} onSave={editCustomer} />;
      default:
        return null;
    }
  };

  // Function to add a new customer
  const addCustomer = (customer) => {
    setCustomers([...customers, { ...customer, id: customers.length + 1 }]);
    setView('list');
  };

  // Function to edit an existing customer
  const editCustomer = (updatedCustomer) => {
    setCustomers(customers.map(cust => cust.id === updatedCustomer.id ? updatedCustomer : cust));
    setView('list');
  };

  // Function to delete a customer
  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <div className="customers">
      {renderContent()}
    </div>
  );
}

export default Customers;
