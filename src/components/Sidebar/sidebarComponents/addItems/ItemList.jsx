import React, { useState } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';
import AddItemForm from './AddItems'; // Import AddItemForm

const ItemList = () => {
  const defaultItems = [
    {
      number: '12345',
      group: 'Jewellery',
      description: 'Gold Ring',
      alternativeCode: 'GR123',
    },
    {
      number: '23456',
      group: 'Gemstone',
      description: 'Ruby Gemstone',
      alternativeCode: 'RG456',
    },
    {
      number: '34567',
      group: 'Watch',
      description: 'Silver Watch',
      alternativeCode: 'SW789',
    },
  ];

  const [items, setItems] = useState(defaultItems);
  const [view, setView] = useState('list'); // Toggle between list and add item view
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item for editing

  // Toggle to show Add Item Form
  const handleAddItem = () => setView('add');

  // Handle editing an item
  const handleEditItem = (item) => {
    setSelectedItem(item);
    setView('edit');
  };

  // Handle deleting an item
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.number !== id));
  };

  // Function to handle adding new item
  const addItem = (newItem) => {
    setItems([...items, newItem]);
    setView('list');
  };

  // Function to handle editing an existing item
  const editItem = (updatedItem) => {
    setItems(items.map((item) => (item.number === updatedItem.number ? updatedItem : item)));
    setView('list');
  };

  // Render content based on the current view state
  const renderContent = () => {
    switch (view) {
      case 'list':
        return (
          <div className='p-4'>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
              <h3>Item List</h3>
              <Button variant="primary" onClick={handleAddItem}>
                Add Item
              </Button>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Description</th>
                  <th>Group</th>
                  <th>Alternative Code</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.number}>
                    <td>{item.number}</td>
                    <td>{item.description}</td>
                    <td>{item.group}</td>
                    <td>{item.alternativeCode}</td>
                    <td>
                      <div className="d-flex justify-content-end align-items-center gap-3">
                        <Dropdown>
                          <Dropdown.Toggle variant="primary">Actions</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleEditItem(item)}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteItem(item.number)}>Delete</Dropdown.Item>
                            <Dropdown.Item>Disable</Dropdown.Item>
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
        return <AddItemForm onCancel={() => setView('list')} onAddItem={addItem} />; {/* Pass correct function name here */}
      case 'edit':
        return <AddItemForm item={selectedItem} onCancel={() => setView('list')} onAddItem={editItem} />; {/* Pass correct function name here */}
      default:
        return null;
    }
  };

  return <div className="item-list">{renderContent()}</div>;
};

export default ItemList;
