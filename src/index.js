import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';// Carousal
import App0 from './testUseCallback/App';
import App1 from './testUseRef/App1';
import App2 from './testUseRef/App2';
import App3 from './testUseRef/App3';
import App4 from './testForwardRef/App';
import App5 from './testMouseEvent/App';
import "./whatevs/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
