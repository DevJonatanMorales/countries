import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../interfaces/Country";

const initialState: Partial<Country> = {};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<Country>) => {
      Object.assign(state, action.payload);
    },
    clearCountry: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setCountry, clearCountry } = countrySlice.actions;
export default countrySlice.reducer;
