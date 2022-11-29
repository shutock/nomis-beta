import dynamic from "next/dynamic";
import React from "react";

import Layout from "../components/layout";
import Button from "../components/pages/scoredWallet/button";

export default function Home() {
  const Scene = dynamic(() => import("../components/pages/home/scene"), {
    ssr: false,
  });

  return (
    <Layout pageClass="home" pageTitle="Home">
      <section className="hero">
        <Scene />
        <div className="wrapper">
          <div className="col card">
            <h1>Explore Nomis</h1>
            <h2>Wallet Scoring and Credentials Protocol</h2>
            <p>
              The infrastructure for data-based personalized web3 experiences.
            </p>
            <div className="row buttons">
              <Button className={"primary"}>Try dApp</Button>
              <Button>Read Docs</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
