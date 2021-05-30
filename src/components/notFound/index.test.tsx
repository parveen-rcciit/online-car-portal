import React from 'react';
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './index';

describe('NotFound component', () => {
  it('renders NotFound successfully', () => {
    const { unmount } = render(
      <Router>
        <NotFound />
      </Router>,
    );
    unmount();
  });
});
