import React from "react";
import dynamic from "next/dynamic";

import useScroll from "../../hooks/useScroll";

import Logo from "../logo";
import GetScore from "../getScore";

export default function Header() {
  const Wallet = dynamic(() => import("../wallet"), { ssr: false });
  const scroll = useScroll();
  const maxScroll = 64;
  const percent = scroll < maxScroll ? scroll / maxScroll : 1;

  const style = {
    background: "rgba(var(--color-bg), calc(var(--alpha-bg) *" + percent + "))",
    borderColor:
      "rgba(var(--color-text), calc(var(--alpha-border) *" + percent + "))",
    backdropFilter: "blur(" + percent + "rem)",
  };
  return (
    <header style={style}>
      <div className="wrapper">
        <div className="row header">
          <div className="row logoWrapper">
            <Logo />
          </div>
          <div className="row getScoreWrapper">
            <GetScore />
          </div>
          <div className="row walletWrapper">
            <Wallet />
          </div>
        </div>
      </div>
    </header>
  );
}
