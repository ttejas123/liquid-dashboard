import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_APP_AXIOS_RUN,
      prepareHeaders: (headers, { getState }) => {
        return headers
      },
    }),
    tagTypes: ["apis"],
    endpoints: (builder) => ({}),
})

export const ComponentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      unlockDojoSlot: builder.mutation({
        query: ({ id, slotId }) => ({
          url: `/pet/dojo/${id}/unlock`,
          method: "POST",
          body: {
            dojoId: slotId,
          },
        }),
        invalidatesTags: ["Player"],
      }),
      depositDojoSlot: builder.mutation({
        query: ({ id, slotId, petId }) => ({
          url: `/pet/dojo/${id}/deposit`,
          method: "POST",
          body: {
            dojoId: slotId,
            petId: petId,
          },
        }),
        invalidatesTags: ["Player"],
      }),
      withdrawDojoSlot: builder.mutation({
        query: ({ id, slotId, petId }) => ({
          url: `/pet/dojo/${id}/withdraw`,
          method: "POST",
          body: {
            dojoId: slotId,
            petId: petId,
          },
        }),
        invalidatesTags: ["Player"],
      }),
    }),
  })
  
  export const {
    useUnlockDojoSlotMutation,
    useDepositDojoSlotMutation,
    useWithdrawDojoSlotMutation,
  } = ComponentApiSlice