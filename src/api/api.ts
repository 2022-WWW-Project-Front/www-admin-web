import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_API_URL
  }),
  endpoints: (builder) => ({
    requestSignIn: builder.mutation({
      query: ({ code }) => ({
        url: '/auth/login',
        method: 'POST',
        headers: {
          code
        }
      })
    }),
    editGenreAuthorArtist: builder.mutation({
      query: ({ data, code }) => ({
        url: '/artists',
        method: 'PUT',
        body: data,
        headers: {
          code
        }
      })
    }),
    fileUpload: builder.mutation({
      query: (file) => ({
        url: '/file',
        method: 'POST',
        body: file
      }),
      transformResponse: (response: { data: any }) => {
        return response.data
      }
    }),
    registerArtWork: builder.mutation({
      query: ({ data, code }) => ({
        url: '/artworks/register',
        method: 'POST',
        body: data,
        headers: {
          code
        }
      })
    }),
    bringArtWork: builder.mutation({
      query: ({ code }) => ({
        url: '/artworks',
        method: 'GET',
        headers: {
          code
        }
      })
    }),
    updateArtWork: builder.mutation({
      query: ({ data, code }) => ({
        url: '/artworks',
        method: 'PUT',
        body: data,
        headers: {
          code
        }
      })
    })
  })
})

export const {
  useRequestSignInMutation,
  useEditGenreAuthorArtistMutation,
  useFileUploadMutation,
  useBringArtWorkMutation,
  useUpdateArtWorkMutation
} = api
