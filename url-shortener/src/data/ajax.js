import axios from 'axios';

const encodedParams = new URLSearchParams();

const options = {
  method: 'POST',
  url: 'https://url-shortener-service.p.rapidapi.com/shorten',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '915f65df84msh2ef701f1718c032p1f5431jsnfed3d971dc76',
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
  },
  data: encodedParams,
};

export const getUrl = async url => {
  encodedParams.append('url', url);
  try {
    const data = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {});
