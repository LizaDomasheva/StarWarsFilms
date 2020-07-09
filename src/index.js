import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './stylesheet/index.css';
import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <Route component={App} />
  </HashRouter>,
  document.getElementById('root'),
);
