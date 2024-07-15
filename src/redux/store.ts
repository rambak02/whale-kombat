import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { userApi } from "./services/userApi"
import { miningApi } from "./services/miningApi"

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [miningApi.reducerPath]: miningApi.reducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    {
      return getDefaultMiddleware({}).concat([userApi.middleware, miningApi.middleware])
    },
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;