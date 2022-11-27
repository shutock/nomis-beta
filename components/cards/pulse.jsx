import React from "react";

import { useSelector } from "react-redux";

import { Pulse as Chart } from "../Chart";

import cardsText from "../../utilities/cardsText";
import months from "../../utilities/months";

export default function Pulse({ wallet }) {
  const [mostActive, setMostActive] = React.useState(0);

  const text = wallet.stats.noData
    ? cardsText.pulse.text[0]
    : cardsText.pulse.text[1].replace(
        "{month}",
        months[mostActive].toLowerCase()
      );
  return (
    <div className="col card pulse">
      <Chart wallet={wallet} setMostActive={setMostActive} />
      <div className="col content">
        <h5>
          {wallet.stats.noData
            ? cardsText.pulse.title[0]
            : cardsText.pulse.title[1]}
        </h5>
        <p>{text}.</p>
      </div>
    </div>
  );
}
