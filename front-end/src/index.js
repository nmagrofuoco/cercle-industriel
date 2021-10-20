import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './pages/App';

import './css/flex-layout-attribute.min.css';
import './css/locomotive-scroll.css';
import './css/styles.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
