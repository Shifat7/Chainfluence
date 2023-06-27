import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import "./RegisterPage.css";

import { AuthState } from "../../context/AuthProvider";
import { Notify } from "../../utils";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const setAuth = AuthState();

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // If any field is missing
    if (
      !credentials.name ||
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      setIsLoading(false);
      return Notify("Please Fill all the Feilds", "warn");
    }

    // If password and confirm password doesn't match
    if (credentials.password !== credentials.confirmPassword) {
      setIsLoading(false);
      return Notify("Passwords Do Not Match", "warn");
    }

    // If password is less than 8 characters
    if (credentials.password.length < 8) {
      setIsLoading(false);
      return Notify("Password must be at least 8 characters", "warn");
    }

    try {
      // Register user
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          profilePic: credentials.profilePic,
        }),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem("auth", JSON.stringify(data)); // Save auth details in local storage
        setAuth(data);
        setIsLoading(false);
        navigate("/"); // Go to home page
        return Notify("Your account has been successfully created", "success");
      } else {
        setIsLoading(false);
        return Notify(data.error, "error");
      }
    } catch (error) {
      setIsLoading(false);
      return Notify("Internal server error", "error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen" id="background">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Form onSubmit={registerHandler} className="bg-transparent">
            <h3 className="text-center mb-5 text-2xl">Create new account</h3>

            <div className="mb-4">
              <input
                className="placeholder-gray-500 appearance-none border text-sm border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                type="text"
                name="name"
                tabIndex="1"
                placeholder="Full Name"
                value={credentials.name}
                onChange={(e) => handleCredentials(e)}
              />
            </div>

            <div className="mb-4">
              <input
                className="placeholder-gray-500 appearance-none border text-sm border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                type="email"
                name="email"
                tabIndex="1"
                placeholder="Email Address"
                value={credentials.email}
                onChange={(e) => handleCredentials(e)}
              />
            </div>


            <div className="mb-4">
              <input
                className="placeholder-gray-500 appearance-none border text-sm border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                type="password"
                name="password"
                tabIndex="3"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => handleCredentials(e)}
              />
            </div>

            <div className="mb-4">
              <input
                className="placeholder-gray-500 appearance-none border text-sm border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                type="password"
                name="confirmPassword"
                tabIndex="4"
                placeholder="Confirm Password"
                value={credentials.confirmPassword}
                onChange={(e) => handleCredentials(e)}
              />
            </div>

            <Button
              tabIndex="6"
              variant="success"
              type="submit"
              className=" w-full px-3 py-3 rounded text-white bg-purple-700 hover:bg-purple-800 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner animation="border" role="status" size="sm" />
              ) : (
                "Create Account"
              )}
            </Button>

            <Form.Group className="mb-3 mt-2 text-center" controlId="register">
              <span>
                Already have an account?&nbsp;
                <Link to="/login" tabIndex="6" className="text-purple-900 hover:text-blue-600 font-bold">
                  Log in
                </Link>
              </span>
            </Form.Group>
          </Form>
        </div>
        <div className="col-span-2"></div> {/* Empty right grids */}
      </div>
    </div>
  );
};

export default RegisterPage;
