import { useEffect, useState } from 'react';
export const useLocalStorage = () => {
  const [links, setLinks] = useState();

  useEffect(() => {
    const linksFound = JSON.parse(localStorage.getItem('links'));

    if (linksFound) {
      setLinks(linksFound);
    } else {
      setLinks(null);
    }
  }, []);

  const saveToStorage = link => {
    const linksFound = JSON.parse(localStorage.getItem('links'));
    if (linksFound) {
      const newAdded = [...linksFound, link];
      localStorage.setItem('links', JSON.stringify(newAdded));
      setLinks(newAdded);
    } else {
      localStorage.setItem('links', JSON.stringify([link]));
      setLinks([link]);
      //   console.log(links);
    }
  };

  return { links, saveToStorage };
};
