import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Header: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = (isDark: boolean) => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark-mode");
      return;
    }
    body.classList.remove("dark-mode");
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkTheme(e.target.checked);
  };

  useEffect(() => {
    toggleTheme(isDarkTheme);
  }, [isDarkTheme]);

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
      {isDarkTheme ? (
        <label htmlFor="btnTheme" className="header__subtitle">
          <FaMoon className="header__icon" /> Light Mode
        </label>
      ) : (
        <label htmlFor="btnTheme" className="header__subtitle">
          <FaSun className="header__icon" /> Dark Mode
        </label>
      )}
    </header>
  );
};
