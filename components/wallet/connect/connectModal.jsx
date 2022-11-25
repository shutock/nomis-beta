import { useConnect } from "wagmi";

import Icon from "../../icon";
import Connector from "./connector";

export default function ConnectModal({ handleClose, isOpen }) {
  const { connectors } = useConnect();

  return (
    <>
      <div className={isOpen ? "col connectModal opened" : "col connectModal"}>
        <div className="row title">
          <h5>Connect Wallet</h5>
          <div className="close" onClick={handleClose}>
            <Icon size={16} icon="close" />
          </div>
        </div>
        <div className="col content">
          <span>Other web3 connectors will be added soon...</span>
          <div className="col connectors">
            {connectors.map((connector) => {
              return (
                <Connector
                  handleClose={handleClose}
                  key={connector.name}
                  connector={connector}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={isOpen ? "overlay opened" : "overlay"}
        onClick={handleClose}
      ></div>
    </>
  );
}
