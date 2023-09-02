import Axios from "axios";
import React, { useState } from "react";

export default function CreateNewForm(props) {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();

  async function submitHandler(e) {
    e.preventDefault();
    const formData = { name: name, species: species };
    const newAnimal = await Axios.post("/create-animal", formData);
    console.log("submitHandler newAnimal -> ", newAnimal)
    props.setAnimals((prev) => prev.concat([newAnimal.data]));
    setName("");
    setSpecies("");
  }

  return (
    <form action="p-3 bg sucess bg-opacity-25 mb-5" onSubmit={submitHandler}>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Animal Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
      </div>
      <button className="btn btn-success">Create New Animal</button>
    </form>
  );
}
