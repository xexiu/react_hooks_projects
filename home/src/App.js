import React, { useState } from 'react';
import Gallery from './Gallery';
import Joke from './Joke';
import Matrix from './Matrix';
import Stories from './Stories';
import Tasks from './Tasks';

function App() {
    const [userQuery, setUserQuery] = useState('');
    const [showGallery, setShowGallery] = useState(true);

    const updateUserQuery = event => {
        setUserQuery(event.target.value);
        console.log('userQuery', userQuery);
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            setUserQuery('');
            searchQuery();
        }
    }

    const searchQuery = () => {
        window.open(`https://google.com/search?q=${userQuery}`, '_blank');
    }

    const toggleShowGallery = () => {
        setShowGallery(!showGallery);
    }

    return (
        <div className="App">
            <h1>Hello Sergiu</h1>
            <div className='form'>
                <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
                <button onClick={searchQuery}>Search</button>
            </div>
            <hr />
            <Joke />
            <hr />
            <Tasks />
            <hr />
            <div>
                {
                    showGallery ? <Gallery /> : null
                }
                <button onClick={toggleShowGallery}>
                    {showGallery ? 'Hide' : 'Show'} Gallery
                </button>
            </div>
            <hr />
            <Stories />
            <hr />
            <Matrix />
        </div>
    );
}

export default App;
