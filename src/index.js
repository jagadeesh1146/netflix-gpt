import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppWrapper/>
  </BrowserRouter>
);
