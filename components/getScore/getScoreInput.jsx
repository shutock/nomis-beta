import React from "react";

import { useRouter } from "next/router";

import Image from "next/image";

import { blockchains } from "../../utilities/blockchains";

export default function GetScoreInput({ handleClose }) {
  const router = useRouter();

  const [selectedBlockchain, setSelectedBlockchain] = React.useState(
    blockchains.find((e) => e.slug === "ethereum")
  );
  const [addressToSearch, setAddressToSearch] = React.useState("");

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
          />
        </div>
        <div className="getScoreSubmit" onClick={handleSearch}>
          Get Score
        </div>
      </div>

      <div className="row selectBlockchain">
        {blockchains.map((blockchain) => {
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
