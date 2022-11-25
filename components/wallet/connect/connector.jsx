import Image from "next/image";
import { useConnect } from "wagmi";

export default function Connector({ handleClose, connector }) {
  const { connect, isLoading, pendingConnector } = useConnect();
  const handleConnected = () => {
    handleClose();
    setTimeout(() => connect({ connector }), 200);
  };
  return (
    <button
      className={`row connector ${connector.name}`}
      disabled={!connector.ready}
      key={connector.id}
      onClick={() => handleConnected()}
    >
      <Image
        src={`/connectors/${connector.name}.svg`}
        width={40}
        height={40}
        alt={`${connector.name} logo`}
      />

      <span>
        {connector.name != "Injected" ? connector.name : "Browser Addon"}
      </span>

      {isLoading && pendingConnector?.id === connector.id && " (connecting)"}
    </button>
  );
}
