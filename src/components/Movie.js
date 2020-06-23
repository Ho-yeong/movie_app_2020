import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, poster, rating, director, year, actor }) {
  return (
    <Link
      to={{
        pathname: "/movie",
        state: {
          year,
          title,
          poster,
          rating,
          actor,
          director,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">
            {title
              .replace(/<b>/gi, "")
              .replace(/<\/b>/gi, "")
              .replace("&amp;", ":")}
          </h3>
          <h5 className="movie__rating">{rating}/10</h5>
          <h5 className="movie__director">{director}</h5>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__actor">{actor}</p>
        </div>
      </div>
    </Link>
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
