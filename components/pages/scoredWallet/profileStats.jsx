export default function ProfileStats({ wallet }) {
  const balance = Math.round(wallet.stats.balance * 100) / 100;

  const turnover = Math.round(wallet.stats.walletTurnover * 100) / 100;

  const _years = Math.floor(wallet.stats.walletAge / 12);
  const age = {
    years: _years,
    month: wallet.stats.walletAge - _years * 12,
  };
  return (
    <div className="row profileStats">
      <div className="col stat balance">
        <div className="row value">
          <span className="num">{balance}</span>
          <span className="units">{wallet.wallet.blockchain.coin}</span>
        </div>
        <div className="description">Balance</div>
      </div>

      <div className="col stat turnover">
        <div className="row value">
          <span className="num">{turnover}</span>
          <span className="units">{wallet.wallet.blockchain.coin}</span>
        </div>
        <div className="description">Turnover</div>
      </div>

      <div className="col stat age">
        <div className="row values">
          {age.years > 0 ? (
            <div className="row value">
              <span className="num">{age.years}</span>
              <span className="units">y</span>
            </div>
          ) : null}

          <div className="row value">
            <div className="span num">{age.month}</div>
            <span className="units">{age.month > 1 ? "mos" : "mo"}</span>
          </div>
        </div>
        <div className="description">Wallet Age</div>
      </div>
    </div>
  );
}
