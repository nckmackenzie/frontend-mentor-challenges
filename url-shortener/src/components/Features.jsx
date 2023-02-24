import { cardsDetails } from '../data';

function Features() {
  return (
    <div className="container">
      <div className="pt-24 pb-12">
        <h2 className="text-xl md:text-3xl text-center font-bold mb-3">
          Advanced Statistics
        </h2>
        <p className="text-sm max-w-sm mx-auto text-center text-secondary-300 mb-16">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative">
          <div className="w-2 h-full md:w-full md:h-2 bg-accent absolute left-1/2 md:left-0 md:top-1/2 -z-10"></div>
          {cardsDetails?.map(detail => (
            <div
              className="shadow bg-white sm:rounded-md px-4 relative pb-8"
              key={detail.id}
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center -mt-8 ">
                <img
                  src={detail.icon}
                  alt={detail.header}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-medium mt-8 mb-3">{detail.header}</h3>
              <p className="text-xs text-secondary-100">{detail.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
