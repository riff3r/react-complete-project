import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
  const [inputUser, setInputUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate('/');
  }

  const handleSignUp = event => {
    event.preventDefault();
    console.log(inputUser);

    createUserWithEmailAndPassword(inputUser.email, inputUser.password);
  };

  const handleNameBlur = event => {
    setInputUser({ ...inputUser, name: event.target.value });
  };
  const handleEmailBlur = event => {
    setInputUser({ ...inputUser, email: event.target.value });
  };
  const handlePasswordBlur = event => {
    setInputUser({ ...inputUser, password: event.target.value });
  };
  const handleConfirmPasswordBlur = event => {
    setInputUser({ ...inputUser, confirmPassword: event.target.value });
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className=" bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="border-dashed border-2 border-indigo-100 bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              onBlur={handleNameBlur}
              name="fullname"
              placeholder="Full Name"
            />

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
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              onBlur={handleConfirmPasswordBlur}
              name="confirm_password"
              placeholder="Confirm Password"
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
            <Link to="/signin"> Sign In</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
