import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <nav className="flex gap-7">
      <Link to="/">Home</Link>
      <Link to="/hotels">Hotels</Link>
      <Link to="/listings">Listing your property</Link>
      <Link to="/register">Register</Link>
      {user ? (
        <Link to="/" onClick={() => signOut(auth)}>
          Log out
        </Link>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </nav>
  );
};

export default Navbar;
