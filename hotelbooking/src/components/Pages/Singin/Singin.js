import React, { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Singin = () => {
  const [inputUser, setInputUser] = useState({
    email: '',
    password: '',
  });

  const [signInWithEmailAndPassword, loggedUser, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }

    if (loggedUser) {
      navigate(from, { replace: true });
    }
  }, [loggedUser, error]);

  const handleLogin = event => {
    event.preventDefault();
    // console.log(inputUser);
    signInWithEmailAndPassword(inputUser.email, inputUser.password);
  };

  const handleEmailBlur = event => {
    setInputUser({ ...inputUser, email: event.target.value });
  };
  const handlePasswordBlur = event => {
    setInputUser({ ...inputUser, password: event.target.value });
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
              Submit
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/register"> Register</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Singin;
