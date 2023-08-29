import axios from "axios";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom";

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    async function go() {
      const response = await axios.get("/api/animals");
      setAnimals(response.data);
    }
    go();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <p>Hey, this is from React!</p>
      <ul>
        {animals.map(function (animal) {
          return <AnimalCard name={animal.name} species={animal.species} />;
        })}
      </ul>
    </div>
  );
}

function AnimalCard(props) {
  return (
    <li>
      Hi, My name is {props.name} and i am the {props.species}
    </li>
  );
}

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
