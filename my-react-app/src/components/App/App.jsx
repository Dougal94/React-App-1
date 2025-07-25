import React, { useState, useCallback } from "react";
import './App.css';

import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";
import Spotify from "../../util/Spotify.jsx";


function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const search = useCallback((term) => {
        Spotify.search(term).then(setSearchResults);
    }, []);

    const addTrack = useCallback(
        (track) => {
            if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
                return;
            setPlaylistTracks((prevTracks) => [...prevTracks, track]);
        },
        [playlistTracks]
    );

    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) => 
            prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
        );
    }, []);

    const updatePlaylistName = useCallback((name) => {
        setPlaylistName(name);
    }, []);

    const savePlaylist = useCallback(() => {
        const trackUris = playlistTracks.map((track) => track.uri);
        Spotify.savePlaylist(playlistName, trackUris).then(() => {
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks]);

    return (
        <div>
            <h1>
                Spotify App Project
            </h1>
            <div className="App">
                <SearchBar onSearch={search} />
                <div className="App-playlist">
                    <SearchResults searchResults={searchResults} onAdd={addTrack} />
                    <Playlist 
                        playlistName={playlistName}
                        playlistTracks={playlistTracks}
                        onNameChange={updatePlaylistName}
                        onRemove={removeTrack}
                        onSave={savePlaylist}
                    />
                </div>
            </div>
         </div>
     );
};

export default App