import { useHotkeys } from "react-hotkeys-hook";

import Icon from "../icon";
import GetScoreInput from "./getScoreInput";

export default function GetScoreModal({ handleClose, isOpen }) {
  useHotkeys("esc", handleClose);

  return (
    <>
      <div
        className={isOpen ? "col getScoreModal opened" : "col getScoreModal"}
      >
        <div className="row title">
          <h5>Explore Nomis Score</h5>
          <div className="close" onClick={handleClose}>
            <Icon size={16} icon="close" />
          </div>
        </div>
        <div className="col content">
          <GetScoreInput handleClose={handleClose} />
        </div>
      </div>
      <div
        className={isOpen ? "overlay opened" : "overlay"}
        onClick={handleClose}
      ></div>
    </>
  );
}
