const axios = require("axios");
const baseUrl = "https://swapi.dev/api/";

export const getPeople = () => {
  return axios
    .get(`${baseUrl}people/`)
    .then((response) => {
      // handle success
      //   console.log(response);
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const getFilm = async (url) => {
  return await axios.get(url).then((res) => ({
    title: res.data.title,
    releaseDate: res.data.release_date,
    director: res.data.director,
  }));
};

export const getFilms = async (filmUrls) => {
  const filmPromises = filmUrls.map((url) => getFilm(url));
  return await Promise.all(filmPromises)
    .then((films) => films)
    .catch((error) => {
      console.log(error);
    });
};
