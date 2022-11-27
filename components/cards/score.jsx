import { Score as Chart } from "../Chart";

import { useSelector } from "react-redux";

import { cardsText } from "../../utilities/cardsText";

export default function Score({ wallet }) {
  return (
    <div className="col card score">
      <Chart score800={wallet.score} />
      <div className="col content">
        <h5>{cardsText.score.title}</h5>
        <p>
          {wallet.score === 0
            ? cardsText.score.text[0]
            : cardsText.score.text[1].replace("{score}", wallet.score)}
          .
        </p>
      </div>
    </div>
  );
}
