import './Details.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details () {
    // genres store const
    const genres = useSelector(store => store.genres);
    // history const
    const history = useHistory();

    
    return (
        <main>
            {/* back to List  button */}
            <button onClick={() => history.push('/')} className="button">Back to List</button>
        </main>

    );

}
export default Details;