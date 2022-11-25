import React from "react";

import FormatedAddress from "../../formatedAddres";
import Icon from "../../icon";

export default function AddressCopy({ address }) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 400);
  };
  const is0x = address[0] === "0" && address[1] === "x" ? true : false;
  return (
    <div
      className={
        isCopied
          ? `row addressCopy${is0x ? " ox" : ""} copied`
          : `row addressCopy${is0x ? " ox" : ""}`
      }
      onClick={copy}
    >
      <FormatedAddress address={address} />
      <Icon icon="content_copy" size={16} active={isCopied} />
    </div>
  );
}
