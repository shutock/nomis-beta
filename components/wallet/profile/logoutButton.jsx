import { useDisconnect } from "wagmi";

export default function LogoutButton({ handleClose }) {
  const { disconnect } = useDisconnect();

  const handleLogout = () => {
    handleClose();
    setTimeout(() => {
      disconnect();
    }, 200);
  };

  return (
    <div className="logoutButton" onClick={handleLogout}>
      Logout
    </div>
  );
}
