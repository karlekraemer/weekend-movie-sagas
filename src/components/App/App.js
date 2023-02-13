import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
// import Details file path
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page Route*/}
        <Route path="/details" exact>
          <Details />
        </Route>
        {/* Add Movie page Route*/}
      </Router>
    </div>
  );
}


export default App;
