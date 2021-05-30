import React from 'react';
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import CarDetail from './index';
import { carDetails } from '../../constants/testMockConstants'

describe('CarDetail component', () => {
    const history = createMemoryHistory()
    beforeEach(() => {
        history.push({
            pathname: `/carDetails/${carDetails.stockNumber}`,
            state: { carDetails: carDetails }
        })
      });
  it('renders CarDetail successfully', () => {
    const { unmount } = render(
      <Router history={history}>
        <CarDetail />
      </Router>,
    );
    unmount();
  });
});
