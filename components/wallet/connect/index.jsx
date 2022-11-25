import React from "react";

import ConnectButton from "./connectButton";
import ConnectModal from "./connectModal";

export default function Connect() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const handleOpen = () => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 200);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsLoaded(false);
    }, 200);
  };

  return (
    <div className="connectWallet">
      <ConnectButton handleOpen={handleOpen} handleClose={handleClose} />
      {isLoaded ? (
        <ConnectModal handleClose={handleClose} isOpen={isOpen} />
      ) : null}
    </div>
  );
}
