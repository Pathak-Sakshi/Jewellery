// src/components/Sidebar/sidebarComponents/Items.js
import React, { useState } from 'react';
import { Table } from 'react-bootstrap'; // Import React-Bootstrap Table

const Items = () => {
  // Sample data for the items table
  const initialData = [
    { srno: 1, items: 'Item 1',numbers:'4', group: 'group A', person: '100',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024'},
    { srno: 2, items: 'Item 2',numbers:'8', group: 'group B', person: '200',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 3, items: 'Item 3',numbers:'1', group: 'group C', person: '300',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 4, items: 'Item 4',numbers:'6', group: 'group A', person: '150',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 5, items: 'Item 5',numbers:'4', group: 'group B', person: '250',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 6, items: 'Item 6',numbers:'10', group: 'group C', person: '350',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 7, items: 'Item 7',numbers:'2', group: 'group A', person: '120',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 8, items: 'Item 8',numbers:'4', group: 'group B', person: '220',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 9, items: 'Item 9',numbers:'4', group: 'group C', person: '320',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 1, items: 'Item 1',numbers:'4', group: 'group A', person: '100',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 2, items: 'Item 2',numbers:'4', group: 'group B', person: '200',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 3, items: 'Item 3',numbers:'4', group: 'group C', person: '300',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 4, items: 'Item 4',numbers:'4', group: 'group A', person: '150',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 5, items: 'Item 5',numbers:'4', group: 'group B', person: '250',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 6, items: 'Item 6',numbers:'4', group: 'group C', person: '350',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 7, items: 'Item 7',numbers:'4', group: 'group A', person: '120',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 8, items: 'Item 8',numbers:'4', group: 'group B', person: '220',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
    { srno: 9, items: 'Item 9',numbers:'4', group: 'group C', person: '320',description:'....',altcode:'Alt-1',types:'jwellery',date:'12/12/2024' },
  ];

  const [data] = useState(initialData); // Directly using the initial data

  return (
    <div className="container mt-3">
      <h2 className="mb-4">Items List</h2>

      {/* Table Section using React-Bootstrap's Table component */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Items</th>
            <th>Numbers</th>
            <th>Group</th>
            <th>Person</th>
            <th>Description</th>
            <th>Alternative code</th>
            <th>Types</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.srno}>
              <td>{row.srno}</td>
              <td>{row.items}</td>
              <td>{row.numbers}</td>
              <td>{row.group}</td>
              <td>{row.person}</td>
              <td>{row.description}</td>
              <td>{row.altcode}</td>
              <td>{row.types}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Items;
