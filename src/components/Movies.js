import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div div className="movies">
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
              <h3>Name: {movie.title}</h3>
              <p>Length: {movie.time}</p>
              <p>Genres: {movie.genres}</p>
              <p>Metascore: {movie.metascore}</p>
          </div>
      ))}
    </div>
  );
};

export default Movies;
