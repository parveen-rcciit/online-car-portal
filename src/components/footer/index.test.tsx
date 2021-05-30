import React from 'react';
import { render } from '@testing-library/react'
import Footer from './index';

describe('Footer component', () => {
  it('renders Footer successfully', () => {
    const { unmount } = render(<Footer />);
    unmount();
  });
});
