import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import './LoginPage.css'

// import { AuthState } from "../../context/AuthProvider";
// import { Notify } from "../../utils";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  // const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // const {setAuth}  = AuthState;

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    navigate("/explore");
    // setIsLoading(true);

    // // If any field is missing
    // if (!credentials.email || !credentials.password) {
    //   setIsLoading(false);
    //   return Notify("Please fill in all the fields", "warn");
    // }

    // try {
    //   const response = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: credentials.email,
    //       password: credentials.password,
    //     }),
    //   });
    //   const data = await response.json();

    //   if (data.success) {
    //     localStorage.setItem("auth", JSON.stringify(data)); // Save auth details in local storage
    //     setAuth(data);
    //     setIsLoading(false);
    //     console.log(data);
    //     navigate("/home"); // Go to home page
    //     return Notify("You are successfully logged in", "success");
    //   } else {
    //     setIsLoading(false);
    //     return Notify(data.error, "warn");
    //   }
    // } catch (error) {
    //   setIsLoading(false);
    //   console.log(error);
    //   return Notify("Internal server error", "error");
    // }
  };

  return (
    <div className="flex items-center justify-center h-screen" id="background">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Form onSubmit={loginHandler} className="bg-transparent">
            <h3 className="mb-2 text-3xl text-left">Sign in trans<span className="text-purple-600">fund</span></h3>
            <p className="font-medium text-sm mb-4 text-left text-gray-600">Enter your credentials to enter your account</p>
            <div className="mb-4">
              <input
                className="placeholder-gray-500 appearance-none border text-sm border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="email"
                type="email"
                name="email"
                tabIndex="1"
                placeholder="Email"
                value={credentials.email}
                onChange={handleCredentials}
              />
            </div>

            <div>
              <input
                className="placeholder-gray-500 appearance-none border text-sm border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="password"
                type="password"
                name="password"
                tabIndex="2"
                placeholder="Password"
                value={credentials.password}
                onChange={handleCredentials}
              />
            </div>

            <div className="text-right mt-2 mb-6 text-sm text-purple-900 hover:text-blue-600">
              <Link
                to="/forgotPassword"
                tabIndex="4"
              >
                Forgot password?
              </Link>
            </div>

            <div>
              <Button
                variant="success"
                type="submit"
                tabIndex="3"
                className=" w-full px-3 py-3 rounded text-white bg-purple-700 hover:bg-purple-800 focus:outline-none"
              >
                Enter
              </Button>
            </div>

            <div className="text-left mt-4 text-sm">
              <span>
                Don't have an account?&nbsp;
                <Link to="/register" className="text-purple-900 hover:text-blue-600 font-bold">
                  Sign up!
                </Link>
              </span>
            </div>
          </Form>
        </div>

        <div className="col-span-2"></div> {/* Empty right grids */}
      </div>
    </div>
  );
};

export default LoginPage;
