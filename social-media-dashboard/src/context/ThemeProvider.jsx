import { useContext, useState, createContext } from 'react';

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
  bg: '',
  mainText: '',
  secondaryText: '',
  cardBg: '',
  cardBgHover: '',
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const bg = !darkMode ? 'bg-light-top-pattern' : 'bg-dark-top-pattern';
  const mainText = !darkMode ? 'text-dark-bg' : 'text-white';
  const secondaryText = !darkMode ? 'text-light-text' : 'text-dark-text';
  const cardBg = !darkMode ? 'bg-light-card' : 'bg-dark-card';
  const cardBgHover = !darkMode
    ? 'hover:bg-light-card-hover'
    : 'hover:bg-dark-card-hover';

  function toggleTheme() {
    setDarkMode(prev => !prev);
  }
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        bg,
        mainText,
        secondaryText,
        cardBg,
        cardBgHover,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
