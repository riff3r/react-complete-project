import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home/Home';
import Listings from './components/Pages/Listings/Listings';
import Register from './components/Pages/Register/Register';
import Footer from './components/Layout/Footer/Footer';
import Hotels from './components/Pages/Home/Hotels/Hotels';
import Singin from './components/Pages/Singin/Singin';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />

        <Route
          path="/listings"
          element={
            <RequireAuth>
              <Listings />
            </RequireAuth>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Singin />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
