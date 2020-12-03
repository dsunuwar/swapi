import "./App.css";
import React, { useState, useEffect } from "react";
import { getPeople } from "../services";

import Loading from "../common/Loading";
import People from "./People";
import Detail from "./Detail";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  useEffect(() => {
    setLoading(true);
    getPeople().then((res) => {
      setLoading(false);
      console.log("res", res);
      setCharacters(res.results);

      // TODO: this will be selected on table
      setSelectedCharacter(res.results[0]);
    });
  }, []);

  return (
    <>
      <h1>Star War People</h1>
      {loading && <Loading />}
      {characters.map((character) => (
        <People character={character} />
      ))}
      <div>
        <span>Pagination: Back | Next</span>
      </div>
      <Detail character={selectedCharacter} />
    </>
  );
};

export default App;
