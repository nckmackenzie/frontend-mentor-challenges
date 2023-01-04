import Header from './components/layout/Header';
import { useTheme } from './context/ThemeProvider';
function App() {
  const { darkMode } = useTheme();
  return (
    <div
      className={`font-inter w-full h-screen ${
        !darkMode ? 'bg-white' : 'bg-dark-bg'
      }`}
    >
      <Header />
    </div>
  );
}

export default App;
