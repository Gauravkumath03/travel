import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Navbar, Nav, Image, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import './Dashboard.css'; // Add custom styling if needed
import AdminPanel from './AdminPanel';
import profileImage from '../../assets/images/gallery/profile.jpg';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalProfit: 0,
    totalUsers: 0,
    totalGrowth: '',
    newBookings: 0,
    topClients: []
  });

  const [adminPhoto, setAdminPhoto] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch dashboard data
  useEffect(() => {
    axios.get('http://localhost:8081/admin/DashboardData')
      .then(response => {
        setDashboardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  // Handle admin profile photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setAdminPhoto(URL.createObjectURL(file)); // For showing the preview
    // You can also send it to the backend to save it
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Submit search (can be modified based on your API)
  const handleSearchSubmit = () => {
    console.log('Searching for:', searchQuery);
    // Implement search functionality as needed
  };

  return (
    <>
    <AdminPanel />
    <div className="dashboard">
      {/* Header with Profile and Search */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
          <Nav className="ml-auto">
            <InputGroup className="search-bar">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button variant="outline-secondary" onClick={handleSearchSubmit}>Search</Button>
            </InputGroup>

            <Nav.Item className="profile-section">
              <Image
                src={adminPhoto || profileImage}
                roundedCircle
                width="50"
                height="50"
              />
              <Form.Control type="file" onChange={handlePhotoChange} className="profile-upload" />
            </Nav.Item>
          </Nav>
          
        </Container>
      </Navbar>

      {/* Main Dashboard Section */}
      <Container fluid className="mt-4">
        <Row>
          {/* Total Profit */}
          <Col lg={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Total Profit</Card.Title>
                <Card.Text>${dashboardData.totalProfit}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Total Users */}
          <Col lg={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Total Users</Card.Title>
                <Card.Text>{dashboardData.totalUsers}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Total Growth */}
          <Col lg={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Total Growth</Card.Title>
                <Card.Text>{dashboardData.totalGrowth}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* New Bookings */}
          <Col lg={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>New Bookings</Card.Title>
                <Card.Text>{dashboardData.newBookings}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Top Valued Clients */}
        <Row className="mt-4">
          <Col lg={12}>
            <Card>
              <Card.Body>
                <Card.Title>Top Valued Clients</Card.Title>
                <ul>
                  {dashboardData.topClients.map((client, index) => (
                    <li key={index}>{client.name}: ${client.value}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Dashboard;
