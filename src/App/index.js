import "./App.css";
import React, { useState, useEffect } from "react";
import { getPeople } from "../services";

import Loading from "../common/Loading";
import People from "./People";
import Detail from "./Detail";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(undefined);

  const loadPeople = () => {
    setLoading(true);
    getPeople()
      .then((res) => {
        setLoading(false);
        setCharacters(res.results);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadPeople();
  }, []);

  return (
    <>
      <h1>Star War People</h1>
      {loading && <Loading />}
      {!loading && (
        <People characters={characters} onRowSelect={setSelectedCharacter} />
      )}
      <div>
        <span>Pagination: Back | Next</span>
      </div>
      {selectedCharacter && <Detail character={selectedCharacter} />}
    </>
  );
};

export default App;
