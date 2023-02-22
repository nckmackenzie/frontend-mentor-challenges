import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className="bg-slate-50">
        <div className="container">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="container">
        <div className="rounded h-24 bg-hero-lg bg-accent bg-no-repeat bg-cover -mt-12 flex items-center px-8">
          <input type="text" />
        </div>
      </div>
    </>
  );
}

export default App;
