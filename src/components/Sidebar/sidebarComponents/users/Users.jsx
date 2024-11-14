import React, { useState } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';
import CustomerForm from './CustomerForm';  // Change this to your CustomerForm component
import LoanPersonForm from './LoanPersonForm';  // Assuming you've created this
import KarigarForm from './KarigarForm';  // Assuming you've created this

function Users() {
  const [view, setView] = useState('list'); // Toggle between views
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user
  const [userType, setUserType] = useState(null); // Track which type of user (Customer, LoanPerson, Karigar) is selected

  // Sample data for customers, loan persons, and karigars
  const [customers, setCustomers] = useState([
    { id: 1, customerName: 'John Doe', companyName: 'ABC Corp', mobileNo: '1234567890', gstNo: 'GST12345', customerType: 'Retailer' },
    { id: 2, customerName: 'Jane Smith', companyName: 'XYZ Ltd', mobileNo: '9876543210', gstNo: 'GST67890', customerType: 'Wholesaler' },
  ]);
  const [loanPersons, setLoanPersons] = useState([
    { id: 1, name: 'Ravi Kumar', loanAmount: 50000, status: 'approved' },
    { id: 2, name: 'Anita Sharma', loanAmount: 30000, status: 'pending' },
  ]);
  const [karigars, setKarigars] = useState([
    { id: 1, name: 'Suresh Kumar', specialization: 'Carpentry', status: 'active' },
    { id: 2, name: 'Ravi Gupta', specialization: 'Plumbing', status: 'inactive' },
  ]);

  // Toggle view for different types of users
  const handleNewUser = (type) => {
    setUserType(type);
    setView('add');
  };

  // Render the main content based on the view state
  const renderContent = () => {
    switch (view) {
      case 'list':
        return (
          <div className="p-4">
            <h2> Users List</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {/* Combine all users into one list */}
                {[...customers, ...loanPersons, ...karigars].map(user => {
                  const type = customers.find(cust => cust.id === user.id) ? 'Customer' :
                               loanPersons.find(lp => lp.id === user.id) ? 'LoanPerson' : 'Karigar';

                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name || user.customerName}</td>
                      <td>{type}</td>
                      <td>
                        <div className="d-flex justify-content-end align-items-center gap-4 p-1">
                          <Dropdown>
                            <Dropdown.Toggle variant="primary">Actions</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => handleEditUser(user, type)}>Edit</Dropdown.Item>
                              <Dropdown.Item onClick={() => handleDeleteUser(user.id, type)}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        );
      case 'add':
        return renderUserForm();
      case 'edit':
        return renderUserForm();
      default:
        return null;
    }
  };

  // Render the correct form based on user type
  const renderUserForm = () => {
    switch (userType) {
      case 'customer':
        return <CustomerForm user={selectedUser} onCancel={() => setView('list')} onSave={saveCustomer} />;
      case 'loanPerson':
        return <LoanPersonForm user={selectedUser} onCancel={() => setView('list')} onSave={saveLoanPerson} />;
      case 'karigar':
        return <KarigarForm user={selectedUser} onCancel={() => setView('list')} onSave={saveKarigar} />;
      default:
        return null;
    }
  };

  // Function to handle adding or editing a customer
  const saveCustomer = (customer) => {
    if (customer.id) {
      // Editing an existing customer
      setCustomers(customers.map(cust => (cust.id === customer.id ? customer : cust)));
    } else {
      // Adding a new customer
      setCustomers([...customers, { ...customer, id: customers.length + 1 }]);
    }
    setView('list');
  };

  // Function to handle adding or editing a loan person
  const saveLoanPerson = (loanPerson) => {
    if (loanPerson.id) {
      // Editing an existing loan person
      setLoanPersons(loanPersons.map(lp => (lp.id === loanPerson.id ? loanPerson : lp)));
    } else {
      // Adding a new loan person
      setLoanPersons([...loanPersons, { ...loanPerson, id: loanPersons.length + 1 }]);
    }
    setView('list');
  };

  // Function to handle adding or editing a karigar
  const saveKarigar = (karigar) => {
    if (karigar.id) {
      // Editing an existing karigar
      setKarigars(karigars.map(kar => (kar.id === karigar.id ? karigar : kar)));
    } else {
      // Adding a new karigar
      setKarigars([...karigars, { ...karigar, id: karigars.length + 1 }]);
    }
    setView('list');
  };

  // Function to handle editing an existing user
  const handleEditUser = (user, type) => {
    setSelectedUser(user);
    setUserType(type);
    setView('edit');
  };

  // Function to handle deleting a user
  const handleDeleteUser = (id, type) => {
    switch (type) {
      case 'customer':
        setCustomers(customers.filter(cust => cust.id !== id));
        break;
      case 'loanPerson':
        setLoanPersons(loanPersons.filter(lp => lp.id !== id));
        break;
      case 'karigar':
        setKarigars(karigars.filter(kar => kar.id !== id));
        break;
      default:
        break;
    }
  };

  return <div className="users">{renderContent()}</div>;
}

export default Users;
