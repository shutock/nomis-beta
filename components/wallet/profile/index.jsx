import React from "react";

import { useHotkeys } from "react-hotkeys-hook";
import useMac from "../../../hooks/useMac";

import ProfileButton from "./profileButton";
import ProfileModal from "./profileModal";

import { shortcuts } from "../../../utilities/shortcuts";

export default function Open() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const isMac = useMac();

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

  useHotkeys(
    isMac ? shortcuts.openProfile.mac : shortcuts.openProfile.win,
    handleOpen
  );
  useHotkeys("esc", handleClose);

  return (
    <div className="connectWallet">
      <ProfileButton handleOpen={handleOpen} />
      {isLoaded ? (
        <ProfileModal handleClose={handleClose} isOpen={isOpen} />
      ) : null}
    </div>
  );
}
