/* eslint-disable no-undef */
import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Detail from '.';
import * as services from '../services';

jest.mock('../services');

describe('Detail', () => {
  test('renders detail section title', async () => {
    services.getCharacterFilms.mockResolvedValue([
      { title: 'title1', director: 'a', releaseDate: 1950 },
      { title: 'title2', director: 'b', releaseDate: 1951 },
    ]);

    const character = {
      name: 'A New Hope',
      birth_year: 1950,
      gender: 'Female',
      films: ['api/films/1/', 'api/films/2/'],
    };

    await waitFor(() => {
      const { getByTestId } = render(<Detail character={character} />);
      expect(getByTestId('detail-section')).toEqual('Detail Section');
      expect(getByTestId('character-name')).toEqual(character.name);
      expect(getByTestId('character-birth-year')).toEqual(character.birth_year);
      expect(getByTestId('character-gender')).toEqual(character.gender);
    });
  });
});
