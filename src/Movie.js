import React from "react";
import PropTypes from "prop-types";
import './Movie.css';

function Movie({ year, title, rating, summary, poster, genres}) {
    return <div className="movies_movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h2 className="movie_title">{ title }</h2>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="genres">
                        {genres.map((genre, i) => (
                            <li key={i} className="genres_genre">
                                { genre }
                            </li>
                        ))}
                    </ul>
                    <p className="movie_summary">{ summary.slice(0, 150) }...</p>
                </div>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;