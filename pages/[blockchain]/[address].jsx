import React from "react";

import useSWR from "swr";
import Layout from "../../components/layout";
import Menu from "../../components/layout/menu";
import WalletStats from "../../components/pages/scoredWallet";

import { blockchains } from "../../utilities/blockchains";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/slices/searchedWallet";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ScoredWallet({ query }) {
  const dispatch = useDispatch();
  dispatch(reset());

  const { data, error } = useSWR(
    `https://api.nomis.cc/api/v1/${query.blockchain}/wallet/${query.address}/score`,
    fetcher
  );

  const currentBlockchain = blockchains.find(
    (e) => e.slug === query.blockchain
  );

  return (
    <Layout
      pageClass="scoredWallet"
      pageTitle={
        !error
          ? `${query.address}'s Score on ${currentBlockchain.item}`
          : `There is an Error`
      }
      pageDescription={
        !error
          ? `${query.address}'s Score on ${currentBlockchain.item}`
          : `We can't get score of this wallet.`
      }
    >
      <div className=".row wrapper">
        <Menu />

        {error || (data && !data.succeeded) ? (
          <WalletStats state="error" />
        ) : data ? (
          <WalletStats
            state="success"
            address={query.address}
            data={data}
            currentBlockchain={currentBlockchain}
          />
        ) : (
          <WalletStats state="loading" />
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const query = await context.query;
  return { props: { query: query } };
}
