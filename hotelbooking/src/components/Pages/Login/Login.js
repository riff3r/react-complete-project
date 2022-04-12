import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLogin = event => {
    event.preventDefault();
    console.log(user);
  };

  const handleEmailBlur = event => {
    setUser({ ...user, email: event.target.value });
  };
  const handlePasswordBlur = event => {
    setUser({ ...user, password: event.target.value });
  };

  return (
    <form onSubmit={handleLogin}>
      <div className=" bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="border-dashed border-2 border-indigo-100 bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign In</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              onBlur={handleEmailBlur}
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              onBlur={handlePasswordBlur}
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-700 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
