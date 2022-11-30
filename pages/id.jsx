import { useAccount } from "wagmi";

import Layout from "../components/layout";
import Menu from "../components/layout/menu";

export default function Id() {
  const { isConnected } = useAccount();
  if (isConnected)
    return (
      <Layout pageClass="id" pageTitle="Nomis ID">
        <div className="wrapper">
          <div className="row layout">
            <Menu />
            <div className="col content">
              <h1>Connected</h1>
              <p>Here should be like a dashboard.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  return (
    <Layout pageClass="id" pageTitle="Nomis ID">
      <div className="wrapper">
        <div className="row layout">
          <Menu />
          <div className="col content">
            <h1>Need to Connect First</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
