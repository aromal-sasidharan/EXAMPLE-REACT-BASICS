import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


import './index.css';
import MyApp from './containers/App';

ReactDOM.render(<MyApp title={"Hello"}/>, document.getElementById('root'));
registerServiceWorker();
