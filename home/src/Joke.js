import React from 'react';
import { useFetch } from './hooks';

function Joke() {
    const { value, url } = useFetch('https://api.chucknorris.io/jokes/random', {});

    return (
        <div>
            <h3>Joke of the session</h3>
            <p>{value}</p>
            <p><em>{url}</em></p>
        </div>
    )
}

export default Joke;
