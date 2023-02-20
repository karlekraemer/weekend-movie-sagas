import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    //fetch genres 
    yield takeEvery('FETCH_GENRES', fetchGenres);
    //fetch movie details 
    yield takeEvery('FETCH_SELECTED_MOVIE_DETAILS', fetchSelectedMovieDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
} //end fetchAllMovies

function* fetchGenres(action) {
    console.log('fetch genres function', action.payload); //working test
    const id = action.payload;
    //get user-clicked movie genre info from DB
    try {
        const genres = yield axios.get(`api/genre/${id}`);
        yield put({ type: 'SET_GENRES', payload: genres.data});
    } catch {
        console.log('fetch genres error');
    }
} //end fetchGenres

function* fetchSelectedMovieDetails(action) {
    console.log('fetch selected movie details', action.payload);
    const id = action.payload;
    //get user-clicked movie details info from DB
    try {
        const selectedMovie = yield axios.get(`api/movie/${id}`);
        yield put({ type: 'SET_SELECTED_MOVIE_DETAILS', payload: selectedMovie.data});
    } catch {
        console.log('fetch selectedMovieDetails error');
    }
} //end fetchSelectedMovieDetails

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Store the movie selected by user
    // is this necessary? Same as movies? --yes, need this to store selected data
const selectedMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
    //one store to rule them all
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
