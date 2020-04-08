import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter basename='/'>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
registerServiceWorker();
