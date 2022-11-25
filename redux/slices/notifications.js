import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [{ title: "Hello Worlds", text: "Lorem ipsum." }],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    removeLast: (state, action) => {
      state.list.pop();
    },
  },
});

export const { add, removeLast } = notificationsSlice.actions;

export default notificationsSlice.reducer;
