import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteDetalhado } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestauranteDetalhado[], void>({
      query: () => 'restaurantes'
    }),
    getPerfil: builder.query<RestauranteDetalhado, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetPerfilQuery } = api

export default api
