import React from 'react'
import "./index.css"
import "./App.css"
import Parking from "./images/Parking.jpg"
import LandingPage from './LandingPage';
import Example from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Test from './component/Test';

function App() {
  return (
    <div className='body'>
      <Example />
      {/* <Test /> */}
      <LandingPage />

    </div>
  );
}

export default App;
