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
    setCounties: (state, action: counterSlice) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setCounties } = counterSlice.actions;
export default counterSlice.reducer;
