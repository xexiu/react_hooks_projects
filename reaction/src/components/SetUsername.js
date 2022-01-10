import { setUsername } from '../state/actions';
import { useAppContext } from './hooks';

function SetUsername() {
    const { state: { username }, dispatch } = useAppContext();

    const updateUsername = event => {
        dispatch(setUsername(event.target.value));
    }

    return (
        <div>
            <h3>Username</h3>
            <input onChange={updateUsername} value={username} />
        </div>
    )
};

export default SetUsername;
