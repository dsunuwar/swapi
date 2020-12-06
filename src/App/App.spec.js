/* eslint-disable no-undef */
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import initialState from '../redux/initialState';
import { setPeople } from '../redux/actions';
import App from '.';

describe('App', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('renders app title', () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    jest.spyOn(redux, 'useDispatch')
      .mockImplementation(
        () => () => store.dispatch(setPeople({})),
      );

    const linkElement = screen.getByText(/Star Wars People/i);
    expect(linkElement).toBeInTheDocument();
  });
});
