import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickMorty/character',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: builder => ({
    characters: builder.query<any, string>({
      query: (id: string) => `${id}`,
    }),
  }),
});
export const { useCharactersQuery } = rickAndMortyApi;

// сделать endpoint на всех персонажей
