import React from 'react';
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import CarContainer from './index';
describe('CarContainer component', () => {
  it('renders CarContainer successfully', () => {
    const { unmount } = render(
      <Router>
        <CarContainer />
      </Router>,
    );
    unmount();
  });
});
