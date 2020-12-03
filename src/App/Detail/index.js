import React from "react";
import Films from "./Films";

const Detail = ({ character }) => {
  return (
    <>
      <h1>Detail Section</h1>
      <div>
        <div>Name: {character.name}</div>
        <div>Birth year: {character.birth_year}</div>
        <div>Gender: {character.gender}</div>
        <Films filmUrls={character.films} />
      </div>
    </>
  );
};

export default Detail;
