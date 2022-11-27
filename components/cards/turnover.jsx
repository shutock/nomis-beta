import Image from "next/image";

import { Cheap, Low, Avg, High } from "../../public/emoji/turnover";

import cardsText from "../../utilities/cardsText";

export default function Turnover({ wallet }) {
  const turnover =
    (wallet.stats.walletTurnover * wallet.stats.balanceUSD) /
    wallet.stats.balance;
  const s = 1000;
  const m = 10000;
  const l = 100000;

  const text =
    turnover < s
      ? cardsText.turnover.text[0]
          .replace("{count}", Math.round(wallet.stats.walletTurnover + 1))
          .replace("{coin}", wallet.wallet.blockchain.coin)
      : cardsText.turnover.text[1]
          .replace("{count}", Math.floor(wallet.stats.walletTurnover))
          .replace("{coin}", wallet.wallet.blockchain.coin);

  // turnover > 0
  //   ? cardsText.turnover.text[1]
  //       .replace("{count}", Math.floor(wallet.stats.walletTurnover))
  //       .replace("{coin}", wallet.wallet.blockchain.coin) + "."
  //   : cardsText.turnover.text[0];

  const title =
    turnover < s
      ? cardsText.turnover.title[0]
      : turnover < m
      ? cardsText.turnover.title[1]
      : turnover < l
      ? cardsText.turnover.title[2]
      : cardsText.turnover.title[3];

  const emoji =
    turnover < s ? Cheap : turnover < m ? Low : turnover < l ? Avg : High;

  return (
    <div className="col card turnover">
      <Image src={emoji} width={64} height={64} alt="Emoji" />
      <div className="col content">
        <h5>{title}</h5>
        <p>{text}.</p>
      </div>
    </div>
  );
}
