import React, { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovieHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films");

      const data = await response.json();
      const results = await data.results;
      setMovies(results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid mt-3">
      <h1 className="text-center">Movies App</h1>
      <div className="w-50 m-auto p-2">
        <button className="btn-primary btn" onClick={fetchMovieHandler}>
          Fetch movies
        </button>
      </div>
      <h5 className="text-center m-auto rounded p-2 w-50 ">Movies List</h5>
      {isLoading && <p className="text-center">Loading...</p>}
      {!isLoading && (
        <div className="card" style={{ margin: "auto", width: "50%" }}>
          {movies.map((movie) => (
            <div className="card-header">
              <h4> {movie.title}</h4>
              <p>Director : {movie.director}</p>
              <p>Release Date : {movie.release_date} </p>
            </div>
          ))}

          {error.trim().length > 1 && <p className="text-center"> {error}</p>}
        </div>
      )}
    </div>
  );
};

export default App;
