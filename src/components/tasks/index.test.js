import React from 'react';
import ReactDOM from 'react-dom';
import Index from '.';

/**
 * TODO: Create tests for all components
 */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
