import { useSelector } from "react-redux";

import FormatedAddress from "../../formatedAddres";

export default function ProfileButton({ handleOpen }) {
  const wallet = useSelector((s) => s.connectedWallet.wallet);
  const address = wallet.ensName ? wallet.ensName : wallet.address;

  return (
    <div
      className={wallet.ensName ? "row profileButton ens" : "row profileButton"}
      onClick={handleOpen}
    >
      <img src={wallet.ensAvatar} alt={`${address}'s userpick`} />
      <FormatedAddress address={address} />
    </div>
  );
}
