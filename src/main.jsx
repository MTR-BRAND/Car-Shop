import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App'; // Adjust the path if your App component is in a different directory
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
