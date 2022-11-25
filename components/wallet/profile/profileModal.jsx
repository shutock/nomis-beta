import { useSelector } from "react-redux";

import Icon from "../../icon";
import FormatedAddress from "../../formatedAddres";
import ProfileScore from "./profileScore";
import AddressCopy from "./addressCopy";
import ProfileStats from "./profileStats";
import LogoutButton from "./logoutButton";
import ThemeSwitcher from "../../themeSwitcher";

export default function ProfileModal({ handleClose, isOpen }) {
  const connected = useSelector((s) => s.connectedWallet);
  const displayName = connected.wallet.ensName
    ? connected.wallet.ensName
    : connected.wallet.address;

  return (
    <>
      <div className={isOpen ? "col profileModal opened" : "col profileModal"}>
        <div className="row title">
          <h5 className="row logoId">
            <span className="logo">NOMIS</span>
            <span className="id">ID</span>
          </h5>
          <div className="close" onClick={handleClose}>
            <Icon size={16} icon="close" />
          </div>
        </div>
        <div className="col content">
          <LogoutButton handleClose={handleClose} />

          <div className="col avatar">
            <div className="userpick">
              <ProfileScore />
              <img
                src={connected.wallet.ensAvatar}
                alt={`${displayName}'s connectedpick`}
              />
            </div>
            {connected.wallet.ensName != "" ? (
              <h4>
                <FormatedAddress address={displayName} />
              </h4>
            ) : null}
            <AddressCopy address={connected.wallet.address} />
          </div>

          <ProfileStats connected={connected} />

          <ThemeSwitcher />
        </div>
      </div>
      <div
        className={isOpen ? "overlay opened" : "overlay"}
        onClick={handleClose}
      ></div>
    </>
  );
}
