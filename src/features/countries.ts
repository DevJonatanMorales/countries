import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../interfaces/Country";

const initialState: Country[] | [] = [];

interface counterSlice {
  payload: Country[];
}

export const counterSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountry: (state, action: counterSlice) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCountry } = counterSlice.actions;
export default counterSlice.reducer;
