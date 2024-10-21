// src/pages/ContactUs.jsx
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Contactus.css'; // Custom CSS file for styling
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import axios from 'axios'

const ContactUs = () => {
    useEffect(() =>{
        document.title= "Contact us"
        window.scroll(0,0)
      },[])
      const [name, setname] = useState('');
      const [email,setemail] = useState('');
      const [message,setmessage]=useState('')

  const handleSubmit = (e) => {
  e.preventDefault();
  const formData = {
    name,
    email,
    message,
  };
  axios
  .post("http://localhost:8081/Contact", formData)
  .then((response) => {
    alert("Thankyou for contacting us.. we will response you with 24 hours!! ");
  })
  .catch((error) => {
    console.error("There was an error submitting the booking!", error);
  });
}
  return (
<>
    <Breadcrumbs title="contact us"  pagename="Contact us" />
    <Container className="contact-us-container my-5">
      <Row>
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form  onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) =>setname(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h3>Our Location</h3>
          <div className="map-container mb-4">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.20214749317!2d74.0758968252229!3d24.8371699279445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39687857a8e8e391%3A0x50be4ad282bddf09!2sSunwar%2C%20Rajasthan%20313206!5e1!3m2!1sen!2sin!4v1728806870907!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <h4>Visit Us At:</h4>
          <p>Sector-37 Main Street, Sanwar, Rajasthan</p>
          <p>Email: support@travelistra.com</p>
          <p>Phone: +91 6367297852</p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactUs;
