/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import People from '.';
import initialState from '../../redux/initialState';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('People', () => {
  it('renders people of star wars', () => {
    const characters = [{
      name: 'Luke Skywalker',
      height: '120',
      mass: '50',
    }];
    const store = mockStore(initialState);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <People
          characters={characters}
          onRowSelect={jest.fn()}
        />
      </Provider>,
    );

    expect(getByText('Name')).not.toBeNull();
    expect(getByTestId('character-name')).toEqual(characters[0].name);
  });
});
