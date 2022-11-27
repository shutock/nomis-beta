import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const keywords =
    "web3, wallet, score, credit score, crypto, cryptocurrency, protocol, nomis";
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="author" content="Nomis team" />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content="#000" />
        <meta property="og:locale" content="us_EN" />
        <meta property="og:type" content="webiste" />
        <meta property="og:url" content="https://nomis.cc/" />
        <meta property="og:site_name" content="Nomis" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nomis_protocol" />
        <meta name="twitter:creator" content="@nomis_protocol" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
