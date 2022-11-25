import React from "react";

import ScoredLayout from "../../components/pages/scoredWallet/ScoredLayout";
import { blockchains } from "../../utilities/blockchains";
import { useDispatch, useSelector } from "react-redux";
import {
  getScore,
  saveWallet,
  addHistory,
  reset,
} from "../../redux/slices/searchedWallet";

export default function ScoredWallet({ query }) {
  const dispatch = useDispatch();
  const currentBlockchain = blockchains.find(
    (e) => e.slug === query.blockchain
  );

  if (!currentBlockchain)
    return (
      <>
        <h1>
          We Don{"'"}t Scoring {query.blockchain} Blockchain Yet
        </h1>
      </>
    );

  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  const history = useSelector((s) => s.searchedWallet.history);

  React.useEffect(() => {
    // dispatch(reset());
    fetch(
      `https://api.nomis.cc/api/v1/${query.blockchain}/wallet/${query.address}/score`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [query]);
  console.log(data);

  return (
    <ScoredLayout
      pageClass="scoredWallet"
      pageTitle={`${query.address}'s Score on ${currentBlockchain.item}`}
      pageDescription={`${query.address}'s Score on ${currentBlockchain.item}`}
    >
      <div className="wrapper"></div>
    </ScoredLayout>
  );
}

export function getServerSideProps(context) {
  return { props: { query: context.query } };
}
