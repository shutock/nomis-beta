import React from "react";
// import Spline from "@splinetool/react-spline";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout pageClass="home" pageTitle="Home">
      <section className="hero">
        <div className="scene">
          {/* <Spline scene="https://prod.spline.design/1s7zQQpgAI6Jxzls/scene.splinecode" /> */}{" "}
          {/* Atom */}
          {/* <Spline scene="https://prod.spline.design/A-CAELRxlfHFcrWL/scene.splinecode" /> */}
        </div>
        <div className="wrapper">
          <h1>Headline</h1>
        </div>
      </section>
    </Layout>
  );
}
