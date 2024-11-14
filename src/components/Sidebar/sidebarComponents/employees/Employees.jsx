import React, { useState } from 'react';
import { Button, Dropdown, Form, Table } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';
import PermissionForm from './PermissionForm';

function Employees() {
  const [view, setView] = useState('list'); // Toggle between views
  const [EmployeeId, setSelectedEmployee] = useState(null); // Track selected employee

  // Sample data for employees
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe',role:"Accountant",username:'jh123',  password: '1234567890', confirmpassword: '0987654321' },
    { id: 2, name: 'Jane Smith',role:'Sale',username:'js124',  password: '2345678901', confirmpassword: '9876543210' }
  ]);

  // Function to handle view changes
  const handleNewEmployee = () => setView('add');
  const handlePermissionForm = (employee) => {
    setSelectedEmployee(employee);
    setView('permissions');
  };
  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setView('edit');
  };

  // Render the main content based on the view state
  const renderContent = () => {
    switch (view) {
      case 'list':
        return (
          <div className='p-4'>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
              <h3>Employee List</h3>
              <Button variant="primary" onClick={handleNewEmployee}>New Employee</Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.username}</td>
                    <td>{employee.role}</td>
                    <td>
                       {/* Wrap the buttons in a flex container */}
                      <div className="d-flex justify-content-end align-items-center gap-4 p-1">
                      <Button variant="primary" onClick={() => handlePermissionForm(employee)}>Permissions</Button>{' '}
                      <Dropdown>
                        <Dropdown.Toggle variant="primary">Actions</Dropdown.Toggle>
                        <Dropdown.Menu >
                          <Dropdown.Item  onClick={() => handleEditEmployee(employee)}>Edit</Dropdown.Item>
                          <Dropdown.Item  onClick={() => handleDeleteEmployee(employee.id)}>Delete</Dropdown.Item>
                          <Dropdown.Item  >Disable</Dropdown.Item>
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
        return <EmployeeForm onCancel={() => setView('list')} onSave={addEmployee} />;
      case 'edit':
        return <EmployeeForm employee={EmployeeId} onCancel={() => setView('list')} onSave={editEmployee} />;
      case 'permissions':
        return <PermissionForm employee={EmployeeId} onCancel={() => setView('list')} onSave={editEmployee} />;
      default:
        return null;
    }
  };

  // Function to add a new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: employees.length + 1 }]);
    setView('list');
  };

  // Function to edit an existing employee
  const editEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    setView('list');
  };

  // Function to delete an employee
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="employees">
      {renderContent()}
    </div>
  );
}

export default Employees;
