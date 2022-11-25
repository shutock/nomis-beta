import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
  wallet: {
    address: "",
    ensName: "",
    ensAvatar: "",
    activeChain: { item: "", slug: "", placeholder: "", coin: "", id: "" },
  },
  score: "Loading...",
  stats: { noData: true },
  isSuccess: false,
};

export const connectedWalletSlice = createSlice({
  name: "connectedWallet",
  initialState,
  reducers: {
    connect: (state, action) => {
      state.wallet = action.payload;
      state.isConnected = true;
    },
    disconnect: (state) => {
      state.wallet = "";
      state.isConnected = false;
    },
    getScore: (state, action) => {
      state.score = Math.round(350 + 450 * action.payload.data.score);
      state.stats = action.payload.data.stats;
      state.isSuccess = action.payload.succeeded;
    },
  },
});

export const { connect, disconnect, getScore } = connectedWalletSlice.actions;

export default connectedWalletSlice.reducer;
