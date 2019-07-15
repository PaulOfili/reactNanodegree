import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ContactBody from './ContactBody';
import HigherContactComponent from './HigherContactComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HigherContactComponent />, document.getElementById('root'));
registerServiceWorker();
