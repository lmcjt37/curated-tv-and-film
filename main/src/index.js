import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import './shared/polyfil';
//importing global css
import './styles/index.css';
import './styles/App.css';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
