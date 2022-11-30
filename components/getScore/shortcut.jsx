import useMac from "../../hooks/useMac";
import useMobile from "../../hooks/useMobile";

import Icon from "../icon";

export default function Shortcut() {
  const isMobile = useMobile();
  const isMac = useMac();

  if (isMobile) return null;

  return (
    <div className="row shortcut">
      {!isMac ? (
        <Icon size={16} icon="keyboard_control_key" />
      ) : (
        <span className="ctrl">ctrl</span>
      )}
      <span className="plus">+</span>
      <span className="slash">/</span>
    </div>
  );
}
