import React, { useState } from "react";

const MoviesForm = ({ onAddMovie }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const newMovie = {
      title: name,
      date: date,
    };
    onAddMovie(newMovie);
  }

  return (
    <div
      className="container w-50 rounded "
      style={{ border: "1px solid blue", padding: "2rem" }}
    >
      <form onSubmit={submitHandler}>
        <div className="input-form mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Movie name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-form">
          <input
            type="date"
            className="form-control"
            placeholder="Released date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-form mt-2">
          <button className="btn btn-primary">New </button>
        </div>
      </form>
    </div>
  );
};

export default MoviesForm;
