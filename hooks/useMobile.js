import React from "react";

export default function useMobile() {
  const [width, setWidth] = React.useState(null);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width > 420) return false;

  return true;
}
