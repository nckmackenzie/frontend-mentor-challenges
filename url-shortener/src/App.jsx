import CTA from './components/CTA';
import Features from './components/Features';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import Links from './components/Links';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const { links } = useLocalStorage();
  return (
    <>
      <div className="bg-slate-50">
        <div className="container">
          <Header />
          <Hero />
        </div>
      </div>
      <Form />
      {links && <Links />}
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
