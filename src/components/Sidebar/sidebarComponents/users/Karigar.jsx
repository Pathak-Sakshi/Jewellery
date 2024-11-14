import React, { useState } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';
import KarigarForm from './KarigarForm';

function Karigars() {
  const [view, setView] = useState('list'); // Toggle between views
  const [selectedKarigar, setSelectedKarigar] = useState(null); // Track selected karigar

  // Sample data for karigars
  const [karigars, setKarigars] = useState([
    { id: 1, name: 'Suresh Kumar', mobileNo: '9876543210', status: 'active' },
    { id: 2, name: 'Ravi Gupta', mobileNo: '8765432109', status: 'inactive' },
  ]);

  // Function to handle view changes
  const handleNewKarigar = () => setView('add');
  const handleEditKarigar = (karigar) => {
    setSelectedKarigar(karigar);
    setView('edit');
  };

  // Render the main content based on the view state
  const renderContent = () => {
    switch (view) {
      case 'list':
        return (
          <div className='p-4'>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
              <h3>Karigar List</h3>
              <Button variant="primary" onClick={handleNewKarigar}>New Karigar</Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Mobile No</th>
                  <th>Status</th>
                  
                </tr>
              </thead>
              <tbody>
                {karigars.map(karigar => (
                  <tr key={karigar.id}>
                    <td>{karigar.id}</td>
                    <td>{karigar.name}</td>
                    <td>{karigar.mobileNo}</td>
                    <td>{karigar.status}</td>
                    <td>
                      <div className="d-flex justify-content-end align-items-center gap-4 p-1">
                        <Dropdown>
                          <Dropdown.Toggle variant="primary">Actions</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleEditKarigar(karigar)}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteKarigar(karigar.id)}>Delete</Dropdown.Item>
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
        return <KarigarForm onCancel={() => setView('list')} onSave={addKarigar} />;
      case 'edit':
        return <KarigarForm karigar={selectedKarigar} onCancel={() => setView('list')} onSave={editKarigar} />;
      default:
        return null;
    }
  };

  // Function to add a new karigar
  const addKarigar = (karigar) => {
    setKarigars([...karigars, { ...karigar, id: karigars.length + 1 }]);
    setView('list');
  };

  // Function to edit an existing karigar
  const editKarigar = (updatedKarigar) => {
    setKarigars(karigars.map(kar => kar.id === updatedKarigar.id ? updatedKarigar : kar));
    setView('list');
  };

  // Function to delete a karigar
  const handleDeleteKarigar = (id) => {
    setKarigars(karigars.filter(karigar => karigar.id !== id));
  };

  return (
    <div className="karigars">
      {renderContent()}
    </div>
  );
}

export default Karigars;
