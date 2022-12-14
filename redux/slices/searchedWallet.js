import { createSlice } from "@reduxjs/toolkit";

const initialCurrent = {
  wallet: { address: null, blockchain: null, suerpick: null },
  score: null,
  stats: null,
  isSuccess: null,
};

const initialState = {
  current: initialCurrent,
  history: [],
};

export const searchedWalletSlice = createSlice({
  name: "searchedWallet",
  initialState,
  reducers: {
    saveWallet: (state, action) => {
      state.current.wallet = action.payload;
    },
    getScore: (state, action) => {
      state.current.score = Math.round(350 + 450 * action.payload.data.score);
      state.current.stats = action.payload.data.stats;
      state.current.isSuccess = action.payload.succeeded;
    },
    addHistory: (state, action) => {
      if (!state.history) state.history[0] = action.payload;
      else state.history.push(action.payload);
    },
    reset: (state) => {
      state.current = initialCurrent;
    },
  },
});

export const { saveWallet, getScore, addHistory, reset } =
  searchedWalletSlice.actions;

export default searchedWalletSlice.reducer;
