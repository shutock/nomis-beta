import { configureStore } from "@reduxjs/toolkit";

import connectedWalletReducer from "./slices/connectedWallet";
import searchedWalletReducer from "./slices/searchedWallet";

export const store = configureStore({
  reducer: {
    connectedWallet: connectedWalletReducer,
    searchedWallet: searchedWalletReducer,
  },
});
