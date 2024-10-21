import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
// import './Booking.css'
function Booking() {
  // State variables for form fields
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [startDate, setstartdate] = useState('');
  const [endDate, setenddate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for submission
    const formData = {
      firstname,
      lastname,
      email,
      phone,
      checkin: startDate,
      checkout: endDate,
    };

    // Post the data to the backend
    axios
      .post("http://localhost:8081/Booking", formData)
      .then((response) => {
        alert("Booking submitted successfully.<br>Please make your payment in 5:00 minutes");
      })
      .catch((error) => {
        console.error("There was an error submitting the booking!", error);
      });
  };

  return (
    <>
    <Breadcrumbs pagename='Booking details' title='Booking Page'  />
      <Container>
        <Row>
          <Col lg="8">
            <div className="booking-form-wrap">
              <h3>Your Details</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <Form.Group controlId="firstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group controlId="lastname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6 my-2">
                    <Form.Label>Check In</Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setstartdate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      className="form-control"
                      minDate={new Date()}
                      required
                    />
                  </Col>

                  <Col md="6 my-2">
                    <Form.Label>Check Out</Form.Label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setenddate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      className="form-control"
                      required
                    />
                  </Col>

                  <Col md="12">
                    <button className="btn btn-success" type="submit" >
                      Submit Now
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Booking;
