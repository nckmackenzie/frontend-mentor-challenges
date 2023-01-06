import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeProvider';
import Stats from './Stats';

function Overview() {
  const { mainText } = useTheme();
  return (
    <section className="pb-6 pt-12">
      <Container>
        <h2 className={`${mainText} text-2xl font-bold mb-4`}>
          Overview - Today
        </h2>
        <Stats />
      </Container>
    </section>
  );
}

export default Overview;
