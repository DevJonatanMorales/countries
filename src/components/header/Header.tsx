import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Header: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = (isDark: boolean) => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkTheme(e.target.checked);
  };

  useEffect(() => {
    toggleTheme(isDarkTheme);
  }, [isDarkTheme]);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <input
        className="header__button"
        type="checkbox"
        name="btnTheme"
        id="btnTheme"
        checked={isDarkTheme}
        onChange={handleToggle}
      />
      <label htmlFor="btnTheme" className="header__subtitle">
        {isDarkTheme ? (
          <FaSun className="header__icon" />
        ) : (
          <FaMoon className="header__icon" />
        )}
        {isDarkTheme ? " Light Mode" : " Dark Mode"}
      </label>
    </header>
  );
};
