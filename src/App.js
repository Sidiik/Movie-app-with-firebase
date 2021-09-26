import React, { useState } from "react";
import MoviesForm from "./components/addMovie";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovieHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://movieapi-49532-default-rtdb.firebaseio.com/movies.json"
      );
      let loadedMovies = [];
      const data = await response.json();
      const results = await data;
      for (const key in results) {
        loadedMovies.push({
          id: key,
          title: results[key].title,
          date: results[key].date,
        });
      }

      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const addMovie = async (movie) => {
    const response = await fetch(
      "https://movieapi-49532-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          Type: "application/json",
        },
      }
    );
    const data = await response.json();
    fetchMovieHandler();
  };

  return (
    <div className="container-fluid mt-3">
      <h1 className="text-center">Movies App</h1>
      <MoviesForm onAddMovie={addMovie} />
      <div className="w-50 m-auto p-2">
        <button className="btn-primary btn" onClick={fetchMovieHandler}>
          Fetch movies
        </button>
      </div>
      <h5 className="text-center m-auto rounded p-2 w-50 ">Movies List</h5>
      {isLoading && (
        <div
          className="spinner-border d-flex justify-content-center"
          role="status"
        ></div>
      )}
      {!isLoading && (
        <div className="card" style={{ margin: "auto", width: "50%" }}>
          {movies.map((movie) => (
            <div className="card-header">
              <h4> {movie.title}</h4>
              <p>Release Date : {movie.date} </p>
            </div>
          ))}

          {error.trim().length > 1 && <p className="text-center"> {error}</p>}
        </div>
      )}
    </div>
  );
};

export default App;
