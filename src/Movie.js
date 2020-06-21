import React from "react";
import PropTypes from "prop-types";

function Movie(title, poster, rating, director, year, actor) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__actor">{actor}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
};

export default Movie;
