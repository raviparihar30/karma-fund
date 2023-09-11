import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Avatar } from "@mui/material";
import "./index.m.css";
import { useForm, Controller } from "react-hook-form";
import { postRequest } from "../../apis";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/user";
import Swal from "sweetalert2"; // Import SweetAlert

const LoginForm = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const [searchParams] = useSearchParams();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await postRequest("api/users/login", formData);
      if (response?.success) {
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("rn-user", JSON.stringify(response?.data?.user));
        setLoggedInUser(response?.data?.user);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Successful",
        });
        if (searchParams.get("blog")) {
          navigate(`/blog/${searchParams.get("blog")}`);
        } else {
          navigate("/");
        }
      } else {
        console.log("39 => ", response);
        // Login failed, show a SweetAlert error message
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: response?.message || "An error occurred during login.",
        });
      }
    } catch (error) {
      // Handle error
      console.log("error => ", error?.response?.data?.message);
      console.error("Login failed:", error?.response?.data?.message);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error?.response?.data?.message || "An error occurred during login.",
      });
    }
  };

  return (
    <div className="container py-5 login">
      <div className="login-container">
        <Avatar
          src="https://preview.cruip.com/creative/images/join-avatar.jpg"
          className="mx-auto my-2"
        />
        <h2 className="text-center fw-bold h1">Welcome Back</h2>
        <Form onSubmit={handleSubmit(onSubmit)} className="mx-auto my-3">
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

          <Button
            variant="primary"
            type="submit"
            className="my-3 d-flex text-center justify-content-center w-50 mx-auto"
          >
            Login
          </Button>
          <Form.Text className="d-flex flex-column text-center justify-content-center w-50 mx-auto">
            Don't have an account?{" "}
            <Link to="/register" className="text-dark">
              Register
            </Link>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
