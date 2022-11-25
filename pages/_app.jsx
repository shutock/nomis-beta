import React from "react";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { Provider } from "react-redux";
import { store } from "../redux/store";

import { ThemeProvider } from "next-themes";

import "../styles/_index.scss";

function App({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const wagmiClient = createClient({
    autoConnect: true,
    chains,
    provider,
  });

  return (
    <Provider store={store}>
      <ThemeProvider>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
