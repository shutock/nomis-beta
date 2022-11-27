import React from "react";
import { useAccount, useNetwork } from "wagmi";

import useSWR from "swr";

import { useDispatch } from "react-redux";
import {
  connect,
  disconnect,
  getScore,
} from "../../redux/slices/connectedWallet";
import useAvatar from "../../hooks/useAvatar";
import useName from "../../hooks/useName";

import { blockchains } from "../../utilities/blockchains";

import Connect from "./connect";
import Profile from "./profile";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Wallet() {
  const dispatch = useDispatch();

  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  const ensName = useName(address);
  const ensAvatar = useAvatar(address);
  const activeChain = isConnected
    ? blockchains.find((e) => e.id === chain.id)
    : "";

  React.useEffect(() => {
    if (isConnected)
      fetch(
        `https://api.nomis.cc/api/v1/${activeChain.slug}/wallet/${address}/score`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => dispatch(getScore(actualData)))
        .catch((err) => {
          console.log(err.message);
        });
  }, [activeChain]);

  React.useEffect(() => {
    if (isConnected) {
      dispatch(
        connect({
          address: address,
          ensName: ensName ? ensName : "",
          ensAvatar,
          activeChain,
        })
      );
    } else dispatch(disconnect());
  }, [ensAvatar, ensAvatar, address]);

  return <>{isConnected ? <Profile /> : <Connect />}</>;
}
