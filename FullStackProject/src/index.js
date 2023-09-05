import axios from "axios";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom";  
import CreateNewForm from "./components/CreateNewForm";
import AnimalCard from "./components/AnimalCard";

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
    <div className="container">
      <h1>Hello</h1>
      <p>Hey, this is from React! JS</p>
      <CreateNewForm setAnimals={setAnimals} />
      <ul>
        {animals.map(function (animal) { 
          return <AnimalCard 
          key={animal._id} 
          id={animal._id} 
          name={animal.name} 
          species={animal.species}
          setAnimals={setAnimals} />;
        })}
      </ul>
    </div>
  );
}

// function AnimalCard(props) {
//   return (
//     <li>
//       Hi, My name is {props.name} and i am the {props.species}
//     </li>
//   );
// }

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
