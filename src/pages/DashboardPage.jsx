import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Dashboard/Header/Header';
import Footer from '../components/Dashboard/Footer/Footer';
import Items from '../components/Sidebar/sidebarComponents/Items';
import Home from '../components/Sidebar/sidebarComponents/Home';
import Users from '../components/Sidebar/sidebarComponents/Users';
import Invoice from '../components/Sidebar/sidebarComponents/Invoice';
import ItemTransfer from '../components/Sidebar/sidebarComponents/ItemTransfer';
import Employees from '../components/Sidebar/sidebarComponents/employees/Employees';
import AddItems from '../components/Sidebar/sidebarComponents/addItems/AddItems';

function DashboardPage() {
  const [currentView, setCurrentView] = useState('home');

  const handleShowItems = () => setCurrentView('items');
  const handleShowHome = () => setCurrentView('home');
  const handleShowEmployees = () => setCurrentView('employees');
  const handleShowAddItems = () => setCurrentView('addItems');
  const handleShowUsers = () => setCurrentView('users');
  const handleShowInvoice = () => setCurrentView('invoice');
  const handleShowItemTransfer = () => setCurrentView('itemTransfer');

  // Mapping views to components
  const viewComponents = {
    home: <Home />,
    employees: <Employees />,
    items: <Items />,
    addItems: <AddItems />,
    users: <Users />,
    invoice: <Invoice />,
    itemTransfer: <ItemTransfer />,
  };

  return (
    <div className="dashboard-page">
      <Container fluid className="d-flex" style={{ minHeight: '100vh' }}>
        <Col xs={3} md={2} className="bg-light p-3 sidebar">
          <Sidebar
            onShowHome={handleShowHome}
            onShowEmployees={handleShowEmployees}
            onShowItems={handleShowItems}
            onShowAddItems={handleShowAddItems}
            onShowUsers={handleShowUsers}
            onShowInvoice={handleShowInvoice}
            onShowItemTransfer={handleShowItemTransfer}
          />
        </Col>

        <Col xs={9} md={10} className="d-flex flex-column content-area">
          <Header />
          <div className="content-body">{viewComponents[currentView]}</div>
          <Footer />
        </Col>
      </Container>
    </div>
  );
}

export default DashboardPage;
