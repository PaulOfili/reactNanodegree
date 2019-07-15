import React from 'react';
import ReactDOM from 'react-dom';
import ContactBody from './ContactBody';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactBody />, div);
  ReactDOM.unmountComponentAtNode(div);
});
