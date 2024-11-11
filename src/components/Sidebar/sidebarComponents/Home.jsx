import React, { useState } from 'react';
import { Card, Row, Col, Alert, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  const [viewPeriod, setViewPeriod] = useState('weekly'); // State to toggle between weekly and monthly

  // Inventory data
  const mainInventory = 120; // Main inventory count
  const loanInventory = 25; // Loan inventory count
  const karigaarInventory = 30; // Karigaar inventory count
  const saleInventory = 50; // Sale inventory count

  // Calculate total inventory
  const totalInventory = mainInventory + loanInventory + karigaarInventory + saleInventory;

  // Weekly Data
  const weeklyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {
        label: 'Sale Inventory',
        data: [50, 60, 45, 70, 65, 80, 85],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Loan Inventory',
        data: [20, 25, 30, 35, 28, 32, 40],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Monthly Data
  const monthlyData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sale Inventory',
        data: [200, 250, 210, 280, 230, 300, 350],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Loan Inventory',
        data: [50, 60, 70, 80, 65, 75, 90],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: viewPeriod === 'weekly' ? 'Sale and Loan Activity (Weekly)' : 'Sale and Loan Activity (Monthly)',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: viewPeriod === 'weekly' ? 'Weeks' : 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Inventory Count',
        },
      },
    },
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-4">Home Dashboard</h2>

      {/* Dashboard Cards Section */}
      <Row>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Main Inventory</Card.Title>
              <Card.Text>{mainInventory}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Loan Inventory</Card.Title>
              <Card.Text>{loanInventory}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Karigaar Inventory</Card.Title>
              <Card.Text>{karigaarInventory}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Sale Inventory</Card.Title>
              <Card.Text>{saleInventory}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Alert for Overdue Items */}
      <Alert variant="warning" className="mt-5">
        <h5>Overdue Items</h5>
        <p>5</p>
      </Alert>

      {/* Buttons to Toggle View */}
      <div className="mb-3">
        <Button
          variant={viewPeriod === 'weekly' ? 'primary' : 'secondary'}
          onClick={() => setViewPeriod('weekly')}
        >
          Weekly View
        </Button>
        <Button
          variant={viewPeriod === 'monthly' ? 'primary' : 'secondary'}
          onClick={() => setViewPeriod('monthly')}
          className="ms-2"
        >
          Monthly View
        </Button>
      </div>

      {/* Chart for Sale and Loan Activity */}
      <div className="mt-4">
        <h4>{viewPeriod === 'weekly' ? 'Sales & Loan Activity (Weekly)' : 'Sales & Loan Activity (Monthly)'}</h4>
        <Line
          data={viewPeriod === 'weekly' ? weeklyData : monthlyData}
          options={options}
        />
      </div>
    </div>
  );
}

export default Home;
