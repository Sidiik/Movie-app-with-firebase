import React from "react";

const addMovie = () => {
  return (
    <div className="container-fluid">
      <form>
        <div className="input-form">
          <input
            type="text"
            className="form-control"
            placeholder="Movie name"
          />
        </div>
        <div className="input-form">
          <input
            type="text"
            className="form-control"
            placeholder="Movie name"
          />
        </div>
      </form>
    </div>
  );
};

export default addMovie;
