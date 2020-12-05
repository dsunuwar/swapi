/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import People from '.';

describe('People', () => {
  test('renders people of star wars', () => {
    const characters = [{
      name: 'Luke Skywalker',
      height: '120',
      mass: '50',
    }];

    const { getByText, getByTestId } = render(
      <People
        characters={characters}
        onRowSelect={jest.fn()}
      />,
    );
    expect(getByText('Name')).not.toBeNull();
    expect(getByTestId('character-name')).toEqual(characters[0].name);
  });
});
