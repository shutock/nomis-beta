import React from "react";
import { useTheme } from "next-themes";

import Icon from "./icon";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: "system", icon: "brightness_4" },
    { name: "light", icon: "light_mode" },
    { name: "dark", icon: "dark_mode" },
  ];

  return (
    <div className="row themeSwitcher">
      {themes.map((e) => {
        return (
          <div
            key={e.name}
            className={`row theme ${e.name}`}
            onClick={() => setTheme(e.name)}
          >
            <Icon
              icon={e.icon}
              size={16}
              active={theme === e.name ? true : false}
            />
            {e.name}
          </div>
        );
      })}
      <div className={`selector ${theme}`}></div>
    </div>
  );
}
