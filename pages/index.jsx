import dynamic from "next/dynamic";
import React from "react";

import Layout from "../components/layout";

export default function Home() {
  const Scene = dynamic(() => import("../components/pages/home/scene"), {
    ssr: false,
  });

  return (
    <Layout pageClass="home" pageTitle="Home">
      <section className="hero">
        {/* <Scene url="https://prod.spline.design/A-CAELRxlfHFcrWL/scene.splinecode" /> */}
        <div className="wrapper">
          <h1>Headline</h1>
        </div>
      </section>
    </Layout>
  );
}
