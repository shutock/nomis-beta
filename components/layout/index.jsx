import React from "react";
import Head from "next/head";

import Footer from "./footer";
import Header from "./header";

export default function Layout({
  children,
  pageTitle = "Page",
  pageClass = "page",
  pageDescription = "Wallet Scoring and Credentials Protocol. The infrastructure for data-based personalized web3 experiences.",
  pageShareImage = "",
}) {
  const title = pageTitle + " / Nomis";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageShareImage} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={pageShareImage} />
      </Head>
      <Header />
      <main className={pageClass}>{children}</main>
      <Footer />
    </>
  );
}
