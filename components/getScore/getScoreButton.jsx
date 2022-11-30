import React from "react";

import Icon from "../icon";

import Shortcut from "./shortcut";

export default function GetScoreButton({ handleOpen }) {
  return (
    <div className="row getScoreButton" onClick={handleOpen}>
      <div className="row input">
        <Icon icon="search" />
        <span>Get score...</span>
      </div>
      <Shortcut />
    </div>
  );
}
