import Layout from "../components/layout";
import Image from "next/image";

import blockchains from "../utilities/blockchains";
import alphabet from "../utilities/alphabet";
import Link from "next/link";
import Menu from "../components/layout/menu";

export default function Blockchains() {
  const sortedBlockchains = blockchains.sort(
    (a, b) => parseFloat(a.item) - parseFloat(b.item)
  );

  return (
    <Layout
      pageClass="blockchains"
      pageTitle="Blockchains"
      pageDescription="List of supported blockchains for Nomis Score."
    >
      <section className="hero">
        <div className="wrapper">
          <div className="col heading">
            <h6>Supported by Nomis</h6>
            <h1>Blockchains</h1>
          </div>
        </div>
      </section>
      <div className="wrapper">
        <div className="row content">
          <Menu />
          <section className="list">
            <h3>List</h3>
            {alphabet.map((letter) => {
              if (blockchains.find((b) => b.item[0] === letter))
                return (
                  <div className="col letter">
                    <h5>{letter}</h5>
                    {sortedBlockchains.map((blockchain) => {
                      if (blockchain.item[0] === letter)
                        return (
                          <Link href={`/${blockchain.slug}`}>
                            <div className="row blockchain">
                              <Image
                                src={`/blockchains/${blockchain.slug}.svg`}
                                width={24}
                                height={24}
                              />
                              {blockchain.item}
                            </div>
                          </Link>
                        );
                    })}
                  </div>
                );
            })}
          </section>
        </div>
      </div>
    </Layout>
  );
}
