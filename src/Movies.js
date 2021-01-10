import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({ poster, title, year, rating, summary, genres }) {
  return (
    <div className="movie">
      <div className="movie__poster">
        <img src={poster} alt={title} title={title} />
      </div>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <div className="movie__rating">{rating}</div>
        <div className="movie__summary">{summary.slice(0, 180)}...</div>
      </div>
    </div>
  );
}

Movies.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
