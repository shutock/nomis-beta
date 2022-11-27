import { useSelector } from "react-redux";

import ProfileScore from "./profileScore"; //score
import AddressCopy from "../../wallet/profile/addressCopy"; //address
import ProfileStats from "./profileStats"; //wallet

export default function User() {
  const data = useSelector((s) => s.searchedWallet.current);
  return (
    <div className="col user">
      <div className="col avatar">
        <div className="userpick">
          <ProfileScore score={data.score} />
          <img
            src={data.wallet.userpick}
            alt={`${data.wallet.address}'s userpick`}
          />
        </div>

        <AddressCopy address={data.wallet.address} formated={false} />
      </div>
      <ProfileStats wallet={data} />
    </div>
  );
}
