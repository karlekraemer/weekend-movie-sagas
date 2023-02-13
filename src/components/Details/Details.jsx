import './Details.jsx';
import { useHistory } from 'react-router-dom';

function Details () {

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