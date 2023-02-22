import bgDesktop from './assets/illustration-working.svg';
function Hero() {
  return (
    <div className="flex flex-col-reverse items-center gap-4 md:grid md:gap-8 md:grid-cols-2 pt-12 pb-24">
      <div className="self-center text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-secondary-700 leading-tight mb-1">
          More than just shorter links
        </h1>
        <p className="text-lg text-secondary-300 lg:w-10/12 mb-8">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn btn-primary btn-md rounded-full">
          Get Started
        </button>
      </div>
      <img src={bgDesktop} alt="Some alt text" className="w-full h-auto" />
    </div>
  );
}

export default Hero;
