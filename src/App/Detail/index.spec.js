/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Detail from '.';
import initialState from '../../redux/initialState';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Detail', () => {
  it('renders detail section title', () => {
    const character = {
      name: 'A New Hope',
      birth_year: 1950,
      gender: 'Female',
      films: ['api/films/1/', 'api/films/2/'],
    };
    const store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Detail character={character} />
      </Provider>,
    );
    expect(getByTestId('detail-section')).toEqual('Detail Section');
    expect(getByTestId('character-name')).toEqual(character.name);
    expect(getByTestId('character-birth-year')).toEqual(character.birth_year);
    expect(getByTestId('character-gender')).toEqual(character.gender);
  });
});
