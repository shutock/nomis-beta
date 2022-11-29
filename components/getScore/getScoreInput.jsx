import React from "react";

import useSWR from "swr";
import { useRouter } from "next/router";

import Image from "next/image";

import blockchainsRaw from "../../utilities/blockchains";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GetScoreInput({ handleClose }) {
  const blockchains = [];

  const [data, setData] = React.useState(null);
  for (let i = 0; i < blockchainsRaw.length; i++) {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${blockchainsRaw[i].coingeckoId}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));

    blockchains[i] = {
      item: blockchainsRaw[i].item,
      slug: blockchainsRaw[i].slug,
      placeholder: blockchainsRaw[i].placeholder,
      coin: blockchainsRaw[i].coin,
      id: blockchainsRaw[i].id,
      startDate: blockchainsRaw[i].startDate,
      coingeckoId: blockchainsRaw[i].coingeckoId,
      rank: data ? data.market_cap_rank : "",
    };
  }

  const router = useRouter();

  const [selectedBlockchain, setSelectedBlockchain] = React.useState(
    router.query.blockchain
      ? blockchains.find((e) => e.slug === router.query.blockchain)
      : blockchains.find((e) => e.slug === "ethereum")
  );
  const [addressToSearch, setAddressToSearch] = React.useState(
    router.query.address ? router.query.address : ""
  );

  const handleSearch = () => {
    handleClose();
    setTimeout(() => {
      router.push(`/${selectedBlockchain.slug}/${addressToSearch}`);
    }, 200);
  };

  return (
    <div className="col getScoreInput">
      <div className="row field">
        <div className="row input">
          <Image
            src={`/blockchains/${selectedBlockchain.slug}.svg`}
            alt={""}
            width={36}
            height={36}
          />
          <input
            type="text"
            placeholder={selectedBlockchain.placeholder}
            autoFocus
            onChange={(e) => setAddressToSearch(e.target.value)}
            defaultValue={addressToSearch}
          />
        </div>
        <div className="getScoreSubmit" onClick={handleSearch}>
          Get Score
        </div>
      </div>

      <div className="row selectBlockchain">
        {blockchains
          .sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank))
          .map((blockchain) => {
            return (
              <div
                className={
                  blockchain.slug === selectedBlockchain.slug
                    ? "row blockchain selected"
                    : "row blockchain"
                }
                key={blockchain.item}
                onClick={() =>
                  setSelectedBlockchain(
                    blockchains.find((e) => e.slug === blockchain.slug)
                  )
                }
              >
                <Image
                  src={`/blockchains/${blockchain.slug}.svg`}
                  width={24}
                  height={24}
                  alt={`${blockchain.item}'s logotype`}
                />
                {blockchain.item}
              </div>
            );
          })}
      </div>
    </div>
  );
}
