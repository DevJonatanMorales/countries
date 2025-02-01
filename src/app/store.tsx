import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/countries";
import { countriesApi } from "../services/countries";
import { countrySlice } from "../features/country";

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    counter: counterSlice.reducer,
    country: countrySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
