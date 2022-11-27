import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getScore, saveWallet } from "../../../redux/slices/searchedWallet";

import Loading from "./cases/loading";
import Success from "./cases/success";
import Error from "./cases/error";

export default function WalletStats({
  state,
  address,
  data,
  currentBlockchain,
}) {
  const dispatch = useDispatch();
  const random = Math.random();

  if (state === "loading") return <Loading />;

  if (state === "error")
    return (
      <h1>
        <Error />
      </h1>
    );

  if (state === "success") {
    dispatch(
      saveWallet({
        address: address,
        blockchain: currentBlockchain,
        userpick: `/userpicks/userpick${
          random < 1 / 3 ? 1 : random < 2 / 3 ? 2 : 3
        }.svg`,
      })
    );
    dispatch(getScore(data));

    return <Success />;
  }
}
