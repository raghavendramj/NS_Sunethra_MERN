import Axios from "axios";
import React from "react";

export default function AnimalCard(props) {
  return (
    <div className="card">
      <div className="our-card-top">
        <div className="our-custom-input">
          <div className="our-custom-input-interior">
            <input type="file" className="form-control form-control-sm" />
          </div>
        </div>
      </div>

      <div className="card-body">
        <h4>{props.name}</h4>
        <p className="text-muted small">{props.species}</p>
        <button className="btn btn-sm btn-primary">Edit</button>
        <button
          className="m-2 btn btn-sm btn-outline-danger"
          onClick={async () => {
            //There's an issue we need to fix it...
            console.log("Id :- ", props.id);
            const delMsg = await Axios.delete(`/animal/${props.id}`);
            props.setAnimals((prev) => {
              return prev.filter((animal) => {
                return animal._id != props.id;
              });
            });
            console.log("delMsg ->", delMsg);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
