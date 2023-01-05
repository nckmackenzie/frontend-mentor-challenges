import { useTheme } from '../../context/ThemeProvider';
function Switch() {
  const { toggleTheme, darkMode, secondaryText } = useTheme();
  const bgColor = !darkMode ? 'bg-light-toggle' : 'bg-dark-toggle';
  const switchBgColor = !darkMode ? 'bg-white' : 'bg-dark-card';
  const margin = !darkMode ? 'ml-auto' : 'mr-auto';
  return (
    <div className="flex w-full md:w-max gap-2 items-center">
      <span className={`text-xs font-bold ${secondaryText} mr-auto md:mr-0`}>
        Dark Mode
      </span>
      <div
        className={`w-8 h-4 rounded-lg px-1 py-2 ${bgColor} flex items-center cursor-pointer`}
        onClick={toggleTheme}
      >
        <div className={`w-3 h-3 rounded-lg ${margin} ${switchBgColor} `}></div>
      </div>
    </div>
  );
}

export default Switch;
