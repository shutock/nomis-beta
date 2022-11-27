import { useSelector } from "react-redux";

import * as Card from "../../../cards";
import User from "../user";

export default function Success() {
  const wallet = useSelector((s) => s.searchedWallet.current);
  return (
    <div className="row stats">
      <div className="col data success">
        <section className="highlights">
          <h4>Highlights</h4>
          <div className="cards">
            <Card.Score wallet={wallet} />
            <Card.Pulse wallet={wallet} />
            <Card.Turnover wallet={wallet} />
            <Card.Age wallet={wallet} />
          </div>
        </section>
      </div>
      <User />
    </div>
  );
}
