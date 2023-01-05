import { useTheme } from '../../context/ThemeProvider';
import Cards from '../header/Cards';
import Container from '../ui/Container';
import Switch from '../ui/Switch';
function Header() {
  const { bg, mainText, secondaryText, darkMode } = useTheme();
  const lineColor = !darkMode ? 'bg-light-toggle' : 'bg-dark-card';
  // bg-dark-card
  return (
    <header className={`py-6 ${bg}`}>
      <Container>
        {/* <div className="relative"> */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="md:mr-auto">
            <h1
              className={`text-lg md:text-2xl font-bold capitalize mb-0 ${mainText}`}
            >
              social media dashboard
            </h1>
            <div className={`text-xs font-bold ${secondaryText}`}>
              Total followers: 23,004
            </div>
          </div>
          <div
            className={`inline-flex md:hidden h-[1px] w-full ${lineColor}`}
          ></div>
          <Switch />
        </div>
        <Cards />
        {/* </div> */}
      </Container>
    </header>
  );
}

export default Header;
