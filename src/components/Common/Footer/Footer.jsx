import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4" >
      <Container>
        <Row className="text-center text-md-left">
          {/* About Section */}
          <Col md={3}>
            <h5 className="text-uppercase mb-4">Travelistra</h5>
            <p>
              Explore the world with Travelistra, your trusted companion for unforgettable travel experiences.
            </p>
          </Col>

          {/* Links Section */}
          <Col md={3}>
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/destinations" className="text-light">Destinations</a></li>
              <li><a href="/contact" className="text-light">Contact Us</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-uppercase mb-4">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="/blog" className="text-light">Blog</a></li>
              <li><a href="/faq" className="text-light">FAQs</a></li>
              <li><a href="/support" className="text-light">Support</a></li>
              <li><a href="/terms" className="text-light">Terms & Conditions</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li><span className="text-light">Email: info@travelistra.com</span></li>
              <li><span className="text-light">Phone: +1 234 567 890</span></li>
              <li><span className="text-light">Address: 123 Sabargam Collage,Surat</span></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <a href="https://facebook.com" className="text-light me-3">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-light me-3">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-light me-3">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="text-light">
              <FaLinkedin />
            </a>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Travelistra. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
