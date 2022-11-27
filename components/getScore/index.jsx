import React from "react";

import { useHotkeys } from "react-hotkeys-hook";
import useMac from "../../hooks/useMac";

import GetScoreButton from "./getScoreButton";
import GetScoreModal from "./getScoreModal";

import { shortcuts } from "../../utilities/shortcuts";

import { blockchains } from "../../utilities/blockchains";

export default function GetScore() {
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
    isMac ? shortcuts.getScore.mac : shortcuts.getScore.win,
    handleOpen
  );

  return (
    <div className="getScore">
      <GetScoreButton handleOpen={handleOpen} handleClose={handleClose} />
      {isLoaded ? (
        <GetScoreModal handleClose={handleClose} isOpen={isOpen} />
      ) : null}
    </div>
  );
}

export function getServerSideProps(context) {
  return { props: { query: context.query } };
}
