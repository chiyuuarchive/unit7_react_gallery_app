/**
 * index.js
 */

// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// CSS stylesheets
import './index.css';

// App component to render to the DOM
import App from './App';

ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.querySelector("div")
);
