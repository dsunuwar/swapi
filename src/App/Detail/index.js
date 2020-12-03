import React from "react";

const Detail = ({ character }) => {
  console.log("Detail");
  return (
    <>
      <h1>Detail Section</h1>
      <div>
        <div>Name: {character.name}</div>
        <div>Birth year: {character.birth_year}</div>
        <div>Gender: {character.gender}</div>
        <div>
          List of films:
          <ul>
            {character.films.map((film) => (
              <>
                <li>{film}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Detail;
