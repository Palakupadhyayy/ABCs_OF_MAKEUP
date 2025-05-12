import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// index.js is the entry point of the code and this where the App component gets rendered

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // This renders the App.js file into the div containing id="root" in the index.html folder.\
  <React.StrictMode> 
       <App />
  </React.StrictMode>
); 
// Strict mode is used for highlighting potential problems and makes the code better and more robust

