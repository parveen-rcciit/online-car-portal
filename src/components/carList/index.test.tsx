import React from 'react';
import { render } from '@testing-library/react'
import CarList from './index';
import { carsList } from '../../constants/testMockConstants'

const {cars} = carsList

describe('CarList component', () => {
    it('renders CarList successfully', () => {
        const { unmount } = render(
            <CarList carList={cars} />
        );
        unmount();
    });
});
