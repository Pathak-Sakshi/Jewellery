import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Dashboard/Header/Header';
import Footer from '../components/Dashboard/Footer/Footer';
import Items from '../components/Sidebar/sidebarComponents/Items';
import Home from '../components/Sidebar/sidebarComponents/Home';
import Invoice from '../components/Sidebar/sidebarComponents/Invoice';
import ItemTransfer from '../components/Sidebar/sidebarComponents/ItemTransfer';
import Employees from '../components/Sidebar/sidebarComponents/employees/Employees';
import Users from '../components/Sidebar/sidebarComponents/users/Users';
import Customer from '../components/Sidebar/sidebarComponents/users/Customer';
import LoanPerson from '../components/Sidebar/sidebarComponents/users/LoanPerson';
import Karigar from '../components/Sidebar/sidebarComponents/users/Karigar';
import ItemList from '../components/Sidebar/sidebarComponents/addItems/ItemList';

function DashboardPage() {
  const [currentView, setCurrentView] = useState('home');

  const handleShowItems = () => setCurrentView('items');
  const handleShowHome = () => setCurrentView('home');
  const handleShowEmployees = () => setCurrentView('employees');
  const handleShowAddItems = () => setCurrentView('addItems');
  const handleShowUsers = () => setCurrentView('users');
  const handleShowInvoice = () => setCurrentView('invoice');
  const handleShowItemTransfer = () => setCurrentView('itemTransfer');
  const handleShowCustomer = () => setCurrentView('customer');
  const handleShowLoanPerson = () => setCurrentView('loanPerson');
  const handleShowKarigar = () => setCurrentView('karigar');

  // Mapping views to components
  const viewComponents = {
    home: <Home />,
    employees: <Employees />,
    items: <Items />,
    addItems: <ItemList />,
    users: <Users />,
    customer: <Customer />,
    loanPerson: <LoanPerson />,
    karigar: <Karigar />,
    invoice: <Invoice />,
    itemTransfer: <ItemTransfer />,
  };

  return (
    <div className="dashboard-page">
      <Container fluid className="d-flex" style={{ minHeight: '100vh' }}>
        <Col xs={4} md={2} className="bg-light p-3 sidebar">
          <Sidebar
            onShowHome={handleShowHome}
            onShowEmployees={handleShowEmployees}
            onShowItems={handleShowItems}
            onShowAddItems={handleShowAddItems}
            onShowUsers={handleShowUsers}
            onShowInvoice={handleShowInvoice}
            onShowItemTransfer={handleShowItemTransfer}
            onShowItemUsers={handleShowUsers}
            onShowCustomer={handleShowCustomer}
            onShowLoanPerson={handleShowLoanPerson}
            onShowKarigar={handleShowKarigar}
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
