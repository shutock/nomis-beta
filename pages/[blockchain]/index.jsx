import Image from "next/image";

import Layout from "../../components/layout";

import useSWR from "swr";

import blockchains from "../../utilities/blockchains";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Blockchain({ blockchain }) {
  const isExist = blockchains.find((b) => b.slug === blockchain) ? true : false;

  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${
      blockchains.find((b) => b.slug === blockchain).coingeckoId
    }`,
    fetcher
  );

  if (!isExist)
    return (
      <Layout pageTitle="Loading">
        <h1>404</h1>
      </Layout>
    );

  if (!data) {
    return <Layout>Loading...</Layout>;
  }

  console.log(data);

  return (
    <Layout
      pageClass="blockchain"
      description={data.description.en}
      pageTitle={blockchains.find((b) => b.slug === blockchain).item}
    >
      <section className="hero">
        <Image
          src={`/blockchains/${
            blockchains.find((b) => b.slug === blockchain).slug
          }.svg`}
          fill
        />
        <div className="wrapper">
          <div className="col heroCard">
            <div className="col heading">
              <h6>Blockchain</h6>
              <h1>{blockchains.find((b) => b.slug === blockchain).item}</h1>
            </div>
            <p>{data.description.en}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function getServerSideProps(context) {
  return { props: { blockchain: context.query.blockchain } };
}
