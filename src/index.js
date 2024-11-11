import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app inside StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
