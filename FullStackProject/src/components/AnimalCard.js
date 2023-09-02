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
      </div>
    </div>
  );
}
