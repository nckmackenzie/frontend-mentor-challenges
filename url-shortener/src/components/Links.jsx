import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Links() {
  const { links } = useLocalStorage();
  const [selectedIndex, setSelectedIndex] = useState();

  const onclickHandler = (index, textToCopy) => {
    setSelectedIndex(index);
    navigator.clipboard.writeText(textToCopy);
    setTimeout(() => {
      setSelectedIndex(null);
    }, 3000);
  };
  return (
    <div className="container mt-2 flex flex-col gap-2">
      {links?.length > 0 &&
        links.map((link, index) => (
          <div
            key={index}
            className="shadow-md rounded bg-white px-4 py-2 flex justify-between items-center"
          >
            <div className="text-sm text-accent">{link.fullUrl}</div>
            <div className="flex gap-4 items-center">
              <div className="text-sm text-primary">{link.shortened}</div>
              <button
                className={`btn btn-sm ${
                  selectedIndex === index ? 'btn-accent' : 'btn-primary'
                } rounded-md`}
                onClick={() => onclickHandler(index, link.shortened)}
              >
                {selectedIndex === index ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Links;
