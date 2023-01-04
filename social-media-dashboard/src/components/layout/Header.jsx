import { useTheme } from '../../context/ThemeProvider';
import Container from '../ui/Container';
function Header() {
  const { bg, mainText, secondaryText } = useTheme();

  return (
    <header className={`h-[25vh] pt-6 ${bg}`}>
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold capitalize mb-0 ${mainText}`}>
              social media dashboard
            </h1>
            <div className={`text-sm font-bold ${secondaryText}`}>
              Total followers: 23,004
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
