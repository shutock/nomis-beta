import React from "react";

export default function useScroll() {
  const [position, setPosition] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      setPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
}
