import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LandingPage from './LandingPage';
import { BrowserRouter } from 'react-router-dom';
import Example from './Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Example />
      <LandingPage />
    </BrowserRouter>
  </React.StrictMode>
);


