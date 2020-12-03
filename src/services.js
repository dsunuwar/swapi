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
