import Axios from "axios";
import React, { useState } from "react";

export default function AnimalCard(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [draftSpecies, setDraftSpecies] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="card">
      {/* <div className="our-card-top">
        {isEditing && (
          <div className="our-custom-input">
            <div className="our-custom-input-interior">
              <input type="file" className="form-control form-control-sm" />
            </div>
          </div>
        )}
      </div> */}

      <div className="card-body">
        {!isEditing && (
          <>
            <h4>{props.name}</h4>
            <p className="text-muted small">{props.species}</p>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                setIsEditing(true);
                setDraftName(props.name);
                setDraftSpecies(props.species);
              }}
            >
              Edit
            </button>
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
          </>
        )}
        {isEditing && (
          <form className="mb-1" onSubmit={submitHandler}>
            <input
              type="text"
              autoFocus
              className="form-control form-control-sm"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
            />
            <input
              type="text"
              autoFocus
              className="form-control form-control-sm"
              value={draftSpecies}
              onChange={(e) => setDraftSpecies(e.target.value)}
            />
            <button className="btn btn-sm btn-success">Save </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel{" "}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
