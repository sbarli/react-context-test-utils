import React from 'react';

import { screen } from '@testing-library/react-native';

import { renderWithProviders } from '@/utils/render-with-providers/renderWithProviders';
import { Name } from '../Name';

describe('<Name />', () => {
  it('has expected context', () => {
    const MOCK_NAME = 'MockFirstName MockLastName';
    renderWithProviders(<Name />, {
      context: {
        nameContext: {
          name: MOCK_NAME,
        },
      },
    });

    expect(screen.getByText(MOCK_NAME, { exact: false })).not.toBeNull();
  });
});
