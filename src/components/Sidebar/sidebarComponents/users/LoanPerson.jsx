import React, { useState } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';
import LoanPersonForm from './LoanPersonForm';

function LoanPersons() {
  const [view, setView] = useState('list'); // Toggle between views
  const [selectedLoanPerson, setSelectedLoanPerson] = useState(null); // Track selected loan person

  // Sample data for loan persons
  const [loanPersons, setLoanPersons] = useState([
    { id: 1, loanPerson: 'ABC Corp', companyName: 'ABC Ltd.', mobileNo: '9876543210', altMobileNo: '1234567890', address: '123 Street, City', gstNo: 'GST123', customerType: 'retailer' },
    { id: 2, loanPerson: 'XYZ Pvt Ltd', companyName: 'XYZ Corp', mobileNo: '8765432109', altMobileNo: '2345678901', address: '456 Avenue, City', gstNo: 'GST456', customerType: 'wholesaler' }
  ]);

  // Function to handle view changes
  const handleNewLoanPerson = () => setView('add');
  const handleEditLoanPerson = (loanPerson) => {
    setSelectedLoanPerson(loanPerson);
    setView('edit');
  };

  // Render the main content based on the view state
  const renderContent = () => {
    switch (view) {
      case 'list':
        return (
          <div className='p-4'>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
              <h3>Loan Person List</h3>
              <Button variant="primary" onClick={handleNewLoanPerson}>New Loan Person</Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Company Name</th>
                  <th>Mobile No.</th>
                  <th>GST No.</th>
                  <th>Type.</th>
                </tr>
              </thead>
              <tbody>
                {loanPersons.map(loanPerson => (
                  <tr key={loanPerson.id}>
                    <td>{loanPerson.id}</td>
                    <td>{loanPerson.loanPerson}</td>
                    <td>{loanPerson.companyName}</td>
                    <td>{loanPerson.mobileNo}</td>
                    <td>{loanPerson.gstNo}</td>
                    <td>{loanPerson.customerType}</td>
                    <td>
                      <div className="d-flex justify-content-end align-items-center gap-4 p-1">
                        <Dropdown>
                          <Dropdown.Toggle variant="primary">Actions</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleEditLoanPerson(loanPerson)}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteLoanPerson(loanPerson.id)}>Delete</Dropdown.Item>
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
        return <LoanPersonForm onCancel={() => setView('list')} onSave={addLoanPerson} />;
      case 'edit':
        return <LoanPersonForm loanPerson={selectedLoanPerson} onCancel={() => setView('list')} onSave={editLoanPerson} />;
      default:
        return null;
    }
  };

  // Function to add a new loan person
  const addLoanPerson = (loanPerson) => {
    setLoanPersons([...loanPersons, { ...loanPerson, id: loanPersons.length + 1 }]);
    setView('list');
  };

  // Function to edit an existing loan person
  const editLoanPerson = (updatedLoanPerson) => {
    setLoanPersons(loanPersons.map(lp => lp.id === updatedLoanPerson.id ? updatedLoanPerson : lp));
    setView('list');
  };

  // Function to delete a loan person
  const handleDeleteLoanPerson = (id) => {
    setLoanPersons(loanPersons.filter(loanPerson => loanPerson.id !== id));
  };

  return (
    <div className="loan-persons">
      {renderContent()}
    </div>
  );
}

export default LoanPersons;
