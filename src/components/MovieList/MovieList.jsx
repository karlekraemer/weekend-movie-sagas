import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
//import use history
import { useHistory } from 'react-router-dom';

function MovieList() {

    //use history const
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //create an handleClick here to navigate us to /details when a movie poster is clicked
    // will also fire off dispatches
    const handleClick = (event) => {
        // send us to details page
        history.push('/details');
        // dispatches
    }


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={handleClick}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;