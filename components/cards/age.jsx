import Image from "next/image";

import cardsText from "../../utilities/cardsText";

import { New, Young, Medium, Old } from "../../public/emoji/age";

export default function Turnover({ wallet }) {
  const today = new Date();

  const firstTx = new Date(
    new Date(today).setMonth(today.getMonth() - wallet.stats.walletAge)
  );

  const blockchainStart = new Date(wallet.wallet.blockchain.startDate);
  const blockchainLifetimeMonths = Math.round(today - blockchainStart);

  const s = new Date(today - (blockchainLifetimeMonths / 4) * 1);
  const m = new Date(today - (blockchainLifetimeMonths / 4) * 2);
  const l = new Date(today - (blockchainLifetimeMonths / 4) * 3);

  const text =
    firstTx > s
      ? cardsText.age.text[0]
      : cardsText.age.text[1].replace("{month}", wallet.stats.walletAge);

  const title =
    firstTx < l
      ? cardsText.age.title[3]
      : firstTx < m
      ? cardsText.age.title[2]
      : firstTx < s
      ? cardsText.age.title[1]
      : cardsText.age.title[0];

  const emoji =
    firstTx < l ? Old : firstTx < m ? Medium : firstTx < s ? Young : New;

  return (
    <div className="col card age">
      <Image src={emoji} width={64} height={64} alt="Emoji" />
      <div className="col content">
        <h5>{title}</h5>
        <p>{text}.</p>
      </div>
    </div>
  );
}
