import './Details.css';
import { useHistory } from 'react-router-dom';

function Details () {

    // history const
    const history = useHistory();

    // GET request to display the selected movie info from the store

    
    return (
        <main>
            {/* back to List  button */}
            <button onClick={() => history.push('/')} className="button">Back to List</button>
        </main>

    );

}
export default Details;