import React, { useEffect, useState } from "react";

import Loading from "../../common/Loading";
import { getFilms } from "../../services";

const Films = ({ filmUrls }) => {
  const [films, setFilms] = useState([]);
  const [loadingFilms, setLoadingFilms] = useState(false);

  const loadFilms = () => {
    setLoadingFilms(true);
    getFilms(filmUrls)
      .then((films) => {
        setLoadingFilms(false);
        setFilms(films);
      })
      .catch((error) => {
        setLoadingFilms(false);
      });
  };

  useEffect(() => {
    loadFilms();
  }, [filmUrls]);

  return (
    <div>
      List of films:
      {loadingFilms && <Loading />}
      {!loadingFilms && (
        <ul>
          {films.map((film, index) => (
            <>
              <li key={index}>
                {film.title}, {film.director}, {film.releaseDate}
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Films;
