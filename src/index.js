import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


import './index.css';
import MyApp from './App';

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
