import React from "react";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { Provider } from "react-redux";
import { store } from "../redux/store";

import { ThemeProvider } from "next-themes";

import "../styles/_index.scss";
import { useRouter } from "next/router";

import Loader from "../components/loader";

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

  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const router = useRouter();
  React.useEffect(() => {
    const handleLoading = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };
    const handleLoaded = () => {
      setIsVisible(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    };

    router.events.on("routeChangeStart", handleLoading);
    router.events.on("routeChangeComplete", handleLoaded);
    router.events.on("routeChangeError", handleLoaded);
    return () => {
      router.events.off("routeChangeStart", handleLoading);
      router.events.off("routeChangeComplete", handleLoaded);
      router.events.off("routeChangeError", handleLoaded);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <WagmiConfig client={wagmiClient}>
          {isVisible ? (
            <Loader isLoading={isLoading} />
          ) : (
            <Component {...pageProps} />
          )}
        </WagmiConfig>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
