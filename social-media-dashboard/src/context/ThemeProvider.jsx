import { useContext, useState, createContext } from 'react';

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
  bg: '',
  mainText: '',
  secondaryText: '',
  cardBg: '',
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const bg = !darkMode ? 'bg-light-top-pattern' : 'bg-dark-top-pattern';
  const mainText = !darkMode ? 'text-dark-bg' : 'text-white';
  const secondaryText = !darkMode ? 'text-light-text' : 'text-dark-text';
  const cardBg = !darkMode ? 'bg-light-card' : 'bg-dark-card';

  function toggleTheme() {
    setDarkMode(prev => !prev);
  }
  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme, bg, mainText, secondaryText, cardBg }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
