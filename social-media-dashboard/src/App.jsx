import Header from './components/layout/Header';
import Overview from './components/overview/Overview';
import { useTheme } from './context/ThemeProvider';
function App() {
  const { darkMode } = useTheme();
  return (
    <div
      className={`font-inter w-full min-h-screen ${
        !darkMode ? 'bg-white' : 'bg-dark-bg'
      }`}
    >
      <Header />
      <Overview />
    </div>
  );
}

export default App;
