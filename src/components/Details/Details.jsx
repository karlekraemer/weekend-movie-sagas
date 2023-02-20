import React from 'react';
import './Details.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details () {
    // genres store const
    const genres = useSelector(store => store.genres);
    // selected movie store const
    const selectedMovie = useSelector(store => store.selectedMovie);
    // history const
    const history = useHistory();

    //return selected movie details and genre info
    return (
        <div>
            <main className="selectedMovieInformationAndGenre">
                {/* return selected movie details */}
                <section className="movieInformation">
                    {selectedMovie.map(movie => {
                        return(
                            <div key={movie.id}>
                                <h1>{movie.title}</h1>
                                <img src={movie.poster} alt={movie.title} />
                                <h3>Description:</h3>
                                <p>{movie.description}</p>
                            </div>
                        )
                    })}
                </section>
                {/* return selected movie genres */}
                <section className="genres">
                    <h2> Genres: </h2>
                    {genres.map(genre => {
                        return(
                            <div key={genre.id}>
                                <li>{genre.genres}</li>
                            </div>
                        )
                    })}
                </section>
                {/* back to List  button */}
                <button onClick={() => history.push('/')} className="homeButton">Back to List</button>
            </main>
        </div>
    );

}
export default Details;