import React from "react";

const Character = ({ character }) => {
  console.log("characters", character);

  return (
    <>
      <div>
        <span>{character.name}</span> &nbsp;
        <span>{character.height}</span>&nbsp;
        <span>{character.mass}</span>
      </div>
    </>
  );
};

export default Character;
