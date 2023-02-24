import React from 'react';

function Form() {
  const [hasError, setHasError] = React.useState(false);
  const inputRef = React.useRef();
  const formSubmit = function (e) {
    e.preventDefault();
    setHasError(false);
    if (String(inputRef.current.value).trim() === '') {
      setHasError(true);
      return;
    }
  };
  return (
    <div className="container">
      <div className="rounded py-4 md:py-8 bg-hero-lg bg-accent bg-no-repeat bg-cover flex items-center px-8 -mt-16 lg:-mt-[66px]">
        <form
          onSubmit={formSubmit}
          className="w-full flex flex-col md:flex-row gap-2 md:gap-4"
        >
          <div className="flex-1">
            <input
              type="text"
              ref={inputRef}
              className={`input ${
                hasError ? 'bg-red-50 border-red-500 focus:ring-red-500' : ''
              }`}
            />
            {hasError && (
              <span className="text-xs text-red-500">Please add a link</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full md:w-max btn btn-primary btn-md rounded-md self-start"
          >
            Shorten
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
