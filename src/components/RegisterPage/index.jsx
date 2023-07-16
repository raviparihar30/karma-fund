import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./index.m.css";
import { Avatar } from "@mui/material";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send the data to the server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      userName: "",
    });
  };

  return (
    <div className="container my-5 register">
      <div className="register-container">
        <Avatar
          src="https://preview.cruip.com/creative/images/join-avatar.jpg"
          className="mx-auto my-2"
        />
        <h2 className="text-center fw-bold h1">
          You've been invited to join us
        </h2>
        <Form onSubmit={handleSubmit} className="w-50 mx-auto my-3">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>userName</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="my-3 d-flex text-center justify-content-center w-50 mx-auto"
          >
            join
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
