import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "testRTK",
  initialState: {
    myname: "556",
  },
  reducers: {
    incre6: (state) => { state.myname += "557"; },
    decre7: (state) => { state.myname += "558"; },
  },
});

export const { incre6, decre7 } = testSlice.actions;
