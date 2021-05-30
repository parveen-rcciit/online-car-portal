import React from 'react';
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index';

describe('Header component', () => {
  it('renders Header successfully', () => {
    const { unmount } = render(
      <Router>
        <Header />
      </Router>,
    );
    unmount();
  });
});
