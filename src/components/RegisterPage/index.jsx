import React from "react";
import { Form, Button } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { postRequest } from "../../apis";
import "./index.m.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      // Call the register API
      const response = await postRequest("api/users/register", formData);
      if (response?.success) {
        navigate("/signin");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Register Successful",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Register Failed",
          text: response?.message || "An error occurred during register.",
        });
      }
    } catch (error) {
      // Handle error
      Swal.fire({
        icon: "error",
        title: "Success",
        text:
          error?.response?.data?.message ||
          "An error occurred during register.",
      });
    }
  };

  const password = watch("password", "");

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
        <Form onSubmit={handleSubmit(onSubmit)} className="mx-auto my-3">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <Form.Control
                  type="text"
                  {...field}
                  isInvalid={!!errors.name}
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <Form.Control
                  type="email"
                  {...field}
                  isInvalid={!!errors.email}
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMobile">
            <Form.Label>Mobile Number</Form.Label>
            <Controller
              name="mobileNo"
              control={control}
              rules={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid mobile number",
                },
              }}
              render={({ field }) => (
                <Form.Control
                  type="text"
                  {...field}
                  isInvalid={!!errors.mobileNo}
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.mobileNo?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <Form.Control
                  type="password"
                  {...field}
                  isInvalid={!!errors.password}
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
              render={({ field }) => (
                <Form.Control
                  type="password"
                  {...field}
                  isInvalid={!!errors.confirmPassword}
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="my-3 d-flex text-center justify-content-center w-50 mx-auto"
          >
            Join
          </Button>
          <Form.Text className="d-flex flex-column text-center justify-content-center w-50 mx-auto">
            Already have an account?{" "}
            <Link to="/signin" className="text-dark">
              Sign In
            </Link>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
