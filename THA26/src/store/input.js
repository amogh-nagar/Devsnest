import {createSlice} from "@reduxjs/toolkit";

const initialstate = {
  name: "",
  email: "",
};

const inputslice = createSlice({
  name: "Input Slice",
  initialState: initialstate,
  reducers: {
    changename(state, action) {
      state.name = action.payload;
    },
    changeemail(state, action) {
      state.email = action.payload;
    },
  },
});

export const inputslicactions = inputslice.actions;

export default inputslice.reducer;
