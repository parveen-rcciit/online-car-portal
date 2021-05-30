import React from 'react';
import { render } from '@testing-library/react'
import Filter from './index';

describe('Filter component', () => {
    it('renders Filter successfully', () => {
        const { unmount } = render(
                <Filter
                    onCarSelect={jest.fn()}
                    onManufacturerSelect={jest.fn()}
                    fetchCarList={jest.fn()}>
                </Filter>
        );
        unmount();
    });
});
