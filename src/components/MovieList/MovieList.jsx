import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
//import use history, axios
import { useHistory } from 'react-router-dom';


function MovieList() {

    //use history const
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //create a handleClick here to navigate us to /details when a movie poster is clicked
        // will also dispatch info of selected movie to the store
    const handleClick = (movie) => {
        console.log('in handleClick');

        return (
            // GET id of selected movie, store it in a variable in store
            dispatch ({ type: 'FETCH_MOVIES', payload: movie.id }),

            // GET genre of selected movie
            
            // send us to details page
            history.push('/details')
        );

    }


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={ () => handleClick(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;