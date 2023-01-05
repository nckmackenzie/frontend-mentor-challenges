import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeProvider';

function Overview() {
  const { mainText } = useTheme();
  return (
    <section className="pb-6 pt-12">
      <Container>
        <h2 className={`${mainText} text-2xl font-bold`}>Overview - Today</h2>
      </Container>
    </section>
  );
}

export default Overview;
