import React from "react";
import dynamic from "next/dynamic";

import Logo from "../logo";
import GetScore from "../getScore";

export default function Header() {
  const Wallet = dynamic(() => import("../wallet"), { ssr: false });
  return (
    <header>
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
